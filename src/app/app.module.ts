import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShippingLabelComponent } from './shipping-label/shipping-label.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDividerModule} from '@angular/material/divider'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list'; 
import {MatRadioModule} from '@angular/material/radio';
import { SafePipePipe } from './safe-pipe.pipe'; 
@NgModule({
  declarations: [
    AppComponent,
    ShippingLabelComponent,
    SafePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    MatListModule,

     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
