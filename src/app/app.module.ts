import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog.component';
import { EventComponent } from './event.component';
import { TrainingComponent } from './training.component';
import { ContactComponent } from './contact.component';
import {MdToolbarModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    EventComponent,
    TrainingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,MdToolbarModule,MdButtonModule
  ],
  exports: [
    MdToolbarModule,MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
