import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

companydata:any;
// assignedmember:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:Data) {
    console.log(data,"rr");
    this.companydata = data ;
  }
}
