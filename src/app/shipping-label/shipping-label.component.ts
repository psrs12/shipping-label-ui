import { Component, OnInit } from '@angular/core';
import { ShippingLabelServiceService } from '../shipping-label-service.service';
import { ShippingLabelRequest } from './ShippingLabelRequest';
import { ShippingLabelResponse } from './ShippingLabelResponse';

@Component({
  selector: 'app-shipping-label',
  templateUrl: './shipping-label.component.html',
  styleUrls: ['./shipping-label.component.css']
})
export class ShippingLabelComponent implements OnInit {

  constructor(private shippingLabelServiceService:ShippingLabelServiceService) { }
  shippingLabelRequest: ShippingLabelRequest=new ShippingLabelRequest();
  shippingLabelRes: ShippingLabelResponse = new ShippingLabelResponse;
  shippingLabelResString!:string;
  result:boolean=false;
  singleShipping:boolean=true;
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
   }

   public createLabel(){
   
    this.result=true;
   console.log(JSON.stringify(this.shippingLabelRequest));
   this.shippingLabelServiceService.getShippingLabel(this.shippingLabelRequest)
    .subscribe(data=>{
      console.log(data);
      this.shippingLabelRes=data;
      this.shippingLabelResString=JSON.stringify(data);
      if(this.shippingLabelRes.errors!=null){
        this.result=false
      }
    })
    
   }

    
}
