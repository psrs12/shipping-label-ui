import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ShippingLabelResponse } from './shipping-label/ShippingLabelResponse';

@Injectable({
  providedIn: 'root'
})
export class ShippingLabelServiceService {

  constructor(private http:HttpClient) { }

  public getShippingLabel(shippingLabelRequest:any):Observable<ShippingLabelResponse>{
    const headers={'content-type':'application/json'}
    return   this.http.post<ShippingLabelResponse>('http://localhost:8080/createLabel',JSON.stringify(shippingLabelRequest),
    {'headers':headers});
  }
}
