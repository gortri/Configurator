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
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DialogTagComponent,
    DisplayComponent
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
  entryComponents: [DialogTagComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
