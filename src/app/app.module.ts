import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {
  MatMenuModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatRadioModule,
  MatIconModule,
  MatDividerModule,
  } from '@angular/material';
import { DialogTagComponent } from './dialog-tag/dialog-tag.component';
import { DisplayComponent } from './display/display.component';
import { DialogAboutComponent } from './dialog-about/dialog-about.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DialogTagComponent,
    DisplayComponent,
    DialogAboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatDividerModule
  ],
  entryComponents: [DialogTagComponent,DialogAboutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
