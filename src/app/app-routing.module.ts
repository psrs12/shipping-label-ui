import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingLabelComponent } from './shipping-label/shipping-label.component';

const routes: Routes = [
  {path: 'createLabel', component:ShippingLabelComponent},
  {path: '',redirectTo: '/createLabel', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
