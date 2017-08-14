import { Component } from '@angular/core';
import { BlogComponent } from './blog.component';
import { EventComponent } from './event.component';
import { TrainingComponent } from './training.component';
import { ContactComponent } from './contact.component';
import {MdToolbarModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
       tabLabels: string[] = ['Our Blogs', 'Training', 'Events', 'Contact Us'];

  currTab: string = 'Our Blogs';

  tabs: {} = {
    'Our Blogs!!' : {'state': true},
    'Training': {'state': false},
    'Events': {'state': false},
    'Contact Us': {'state': false}
  };
   check(state) {
    this.tabs[this.currTab].state = state;
  }

  switchTab(tab: string) {
    if (this.currTab !== tab) {
      this.tabs[this.currTab].state = false;
      this.tabs[tab].state = true;
      this.currTab = tab;
    }
  
}
}
