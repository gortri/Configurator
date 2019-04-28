import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { DialogTagComponent } from '../dialog-tag/dialog-tag.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  defaultProtocol = 'opc-ua';

  constructor(public tag: MatDialog) { }

  ngOnInit() {
  }

  openTag(){
    let tagRef = this.tag.open(DialogTagComponent, {
      width: '600px',
    });
    tagRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);

      //Restart dialog tag
      if(result == 'Return'){
        this.openTag();
      }
    })

  }
}
