import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingLabelComponent } from './shipping-label/shipping-label.component';
import { ViewLabelComponent } from './shipping-label/view-label/view-label.component';


const  routes:  Routes  = [
  {path: '',redirectTo: '/createLabel', pathMatch: 'full'},
  {
  path:  'createLabel',  component:  ShippingLabelComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
