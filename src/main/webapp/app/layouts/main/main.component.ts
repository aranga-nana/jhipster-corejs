import { Component } from '@angular/core';


import { navItems } from './_nav';

@Component({
  selector: 'jhi-main',
  templateUrl: './main.component.html'
})
export class MainComponent {

  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e:any) {
    this.sidebarMinimized = e as boolean;
  }
}

