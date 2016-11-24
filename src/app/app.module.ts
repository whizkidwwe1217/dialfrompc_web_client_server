import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

import {
  MdCoreModule,
  MdSidenavModule,
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdInputModule,
  MdCardModule,
  MdListModule,
  MdIconRegistry
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    MdCoreModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdCardModule
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
