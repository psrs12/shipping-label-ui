import { Component, OnInit } from '@angular/core';
import { ShippingLabelServiceService } from '../shipping-label-service.service';
import { RequestPayload } from './RequestPayload';
import { ShippingLabelRequest } from './ShippingLabelRequest';
import { ShippingLabelResponse } from './ShippingLabelResponse';

@Component({
  selector: 'app-shipping-label',
  templateUrl: './shipping-label.component.html',
  styleUrls: ['./shipping-label.component.css',
  "../../css/bootstrap-multiselect.css",
  "../../css/codemirror.css",
  "../../css/custom-min.css",
  "../../css/default.css",
  "../../css/driver.min.css",
  "../../css/foldgutter.css"]
})
export class ShippingLabelComponent implements OnInit {

  constructor(private shippingLabelServiceService:ShippingLabelServiceService) { }
  shippingLabelRequest: ShippingLabelRequest=new ShippingLabelRequest();
  shippingLabelRes: ShippingLabelResponse = new ShippingLabelResponse;
  shippingLabelResString!:string;
  result:boolean=false;
  singleShipping:boolean=true;
  rawHtml!:string;
  requestJSON!:string;
  requestPayload:RequestPayload |undefined;
  ngOnInit(): void {
    this.shippingLabelRequest.clientId="";
    this.shippingLabelRequest.clientSecret="";
    this.shippingLabelRequest.accessKey="";
    this.shippingLabelRequest.orderNumber="";
    this.shippingLabelRequest.refreshToken="";
    this.shippingLabelRequest.region="us-east-1";
    this.shippingLabelRequest.secretKey="";
    this.shippingLabelRequest.sellingPartyId="";
    this.shippingLabelRequest.shipFromPartyId="";
    console.log('raw html called');
    this.loadRawHtml();
    console.log('raw html finished');
   }

   public createLabel(){
   
    this.result=true;
    if(this.shippingLabelRequest.containerList==null){
      this.requestPayload = new RequestPayload();
      this.requestPayload.shippingParty.partyId=this.shippingLabelRequest.shipFromPartyId;
      this.requestPayload.sellingParty.partyId=this.shippingLabelRequest.sellingPartyId
      this.requestJSON=JSON.parse(JSON.stringify(this.requestPayload));
    }else{
      this.requestJSON=JSON.parse(this.shippingLabelRequest.containerList);
    }
    
   console.log('request JSON '+this.requestJSON);
   this.shippingLabelServiceService.getShippingLabel(this.shippingLabelRequest)
    .subscribe(data=>{
      console.log(data);
      this.shippingLabelRes=data;
      this.shippingLabelResString=JSON.parse(JSON.stringify(data));
      if(this.shippingLabelRes.errors!=null){
        this.result=false
      }
    })
    
   }

   public loadRawHtml(){
    this.shippingLabelServiceService.getRawHtml()
    .subscribe(data=>this.rawHtml=data,
              error=>console.log('oops',error))

   }

    
}
