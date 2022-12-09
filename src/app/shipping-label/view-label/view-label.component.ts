import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShippingLabelData } from '../ShippingLabelData';
import { ShippingLabelResponse } from '../ShippingLabelResponse';

@Component({
  selector: 'app-view-label',
  templateUrl: './view-label.component.html',
  styleUrls: ['./view-label.component.css']
})
export class ViewLabelComponent implements OnInit {
  
  labels: string[] = [];
  labelData!: ShippingLabelData[];

  constructor(public dialogRef: MatDialogRef<ViewLabelComponent>,@Inject(MAT_DIALOG_DATA) public data:string) { }

  ngOnInit(): void {
    var counter:number=0;
    this.labelData=<ShippingLabelData[]>JSON.parse(this.data);
    
  }

  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  downloadImage() {
    alert("You have logged out.");
    this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }
}
