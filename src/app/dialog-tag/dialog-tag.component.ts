import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-tag',
  templateUrl: './dialog-tag.component.html',
  styleUrls: ['./dialog-tag.component.css']
})
export class DialogTagComponent implements OnInit {

  defaultDirection = 'direction1';
  defaultStartAddress ='auto';
  dataTypes = [ 
    {name: 'BOOL',size: 1},{name: 'SINT8',size: 1 },{ name: 'SINT16', size: 2 },
    {name: 'SINT32',size: 4 },{name: 'UINT8',size: 1 },{name: 'UINT16',size: 2},
    {name: 'UINT32',size: 4},{name: 'CHAR',size: 1 },{name: 'BITS8',size: 1 },
    {name: 'BITS16',size: 2 },{name: 'BITS32',size: 4},{name: 'OCTET',size: 1 },
    {name: 'FLOAT',size: 4} 
  ]
  defaultDataType = this.dataTypes[0];
  numOfElements = 1;

  constructor(public tagRef: MatDialogRef<DialogTagComponent>) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.tagRef.close('Confirm');
  }

  onCloseReturn(){
    this.tagRef.close('Return');

  }
  onCloseCancel() {
    this.tagRef.close('Cancel');
  }
}
