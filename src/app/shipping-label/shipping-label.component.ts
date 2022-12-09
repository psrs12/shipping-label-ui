import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TitleStrategy } from '@angular/router';
import { ShippingLabelServiceService } from '../shipping-label-service.service';
import { RequestPayload } from './RequestPayload';
import { ShippingLabelRequest } from './ShippingLabelRequest';
import { ShippingLabelResponse } from './ShippingLabelResponse';
import { ViewLabelComponent } from './view-label/view-label.component';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { config } from 'rxjs';

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

  constructor(private shippingLabelServiceService: ShippingLabelServiceService, public matDialog: MatDialog, 
    private readonly sso: ScrollStrategyOptions) { }
  shippingLabelRequest: ShippingLabelRequest = new ShippingLabelRequest();
  shippingLabelRes: ShippingLabelResponse = new ShippingLabelResponse;
  shippingLabelResString!: string;
  result: boolean = false;
  singleShipping: boolean = true;
  rawHtml!: string;
  requestJSON!: string;
  requestPayload: RequestPayload | undefined;
  scrollStrategy!: ScrollStrategy;
  ngOnInit(): void {
    this.shippingLabelRequest.clientId = "";
    this.shippingLabelRequest.clientSecret = "";
    this.shippingLabelRequest.accessKey = "";
    this.shippingLabelRequest.orderNumber = "";
    this.shippingLabelRequest.refreshToken = "";
    this.shippingLabelRequest.region = "us-east-1";
    this.shippingLabelRequest.secretKey = "";
    this.shippingLabelRequest.sellingPartyId = "";
    this.shippingLabelRequest.shipFromPartyId = "";
    console.log('raw html called');
    this.loadRawHtml();
    console.log('raw html finished');
  }

  public createLabel() {

    this.result = true;
    if (this.shippingLabelRequest.containerList == null) {
      this.requestPayload = new RequestPayload();
      this.requestPayload.shippingParty.partyId = this.shippingLabelRequest.shipFromPartyId;
      this.requestPayload.sellingParty.partyId = this.shippingLabelRequest.sellingPartyId
      this.requestJSON = JSON.parse(JSON.stringify(this.requestPayload));
      const element = document.querySelector("#scs_response");
      if(element!=null){
        element.scrollIntoView(true);
      }
    } else {
      this.requestJSON = JSON.parse(this.shippingLabelRequest.containerList);
      const element = document.querySelector("#flr_response");
      if(element!=null){
        element.scrollIntoView(true);
      }
    }

    console.log('request JSON ' + this.requestJSON);
    this.shippingLabelServiceService.getShippingLabel(this.shippingLabelRequest)
      .subscribe(data => {
        console.log(data);
        this.shippingLabelRes = data;
        this.shippingLabelResString = JSON.parse(JSON.stringify(data));
        if (this.shippingLabelRes.errors != null) {
          this.result = false
        }
      })
      
  }

  public loadRawHtml() {
    this.shippingLabelServiceService.getRawHtml()
      .subscribe(data => this.rawHtml = data,
        error => console.log('oops', error))

  }

  public viewShippingLabel() {
    if (this.result) {
      const dialogConfig = new MatDialogConfig();
      // The user can't close the dialog by clicking outside its body
      dialogConfig.disableClose = true;
      dialogConfig.id = "modal-component";
      dialogConfig.height = "500px";
      dialogConfig.width = "700";
      dialogConfig.scrollStrategy = this.scrollStrategy;
      dialogConfig.data = JSON.stringify(this.shippingLabelRes.labelData);
      dialogConfig.autoFocus=false;
      this.matDialog.open(ViewLabelComponent, dialogConfig);

    }
  }


}
