import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-dialog-about',
  templateUrl: './dialog-about.component.html',
  styleUrls: ['./dialog-about.component.css']
})
export class DialogAboutComponent implements OnInit {

  constructor(public tagRef: MatDialogRef<DialogAboutComponent>) {
  
   }

  ngOnInit() {
  }

  onCloseCancel() {
    this.tagRef.close('Ok');
  }
  
}
