import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { DialogTagComponent } from '../dialog-tag/dialog-tag.component';
import { DialogAboutComponent } from '../dialog-about/dialog-about.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


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
  openAbout(){
    this.tag.open(DialogAboutComponent, {
      width: '600px',
    })
  }
}
