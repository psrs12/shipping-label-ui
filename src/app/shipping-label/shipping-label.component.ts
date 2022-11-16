import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShippingLabelRequest } from './ShippingLabelRequest';

@Component({
  selector: 'app-shipping-label',
  templateUrl: './shipping-label.component.html',
  styleUrls: ['./shipping-label.component.css']
})
export class ShippingLabelComponent implements OnInit {

  constructor(private http:HttpClient) { }
  shippingLabelRequest: ShippingLabelRequest=new ShippingLabelRequest();
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
   console.log(JSON.stringify(this.shippingLabelRequest));
    const headers={'content-type':'application/json'}
    this.http.post('http://localhost:8080/createLabel',JSON.stringify(this.shippingLabelRequest),{'headers':headers})
   .subscribe(data=>console.log(data));
    
   }

    
}
