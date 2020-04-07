import { Component, OnInit } from '@angular/core';


import { navItems } from './_nav';

@Component({
  selector: 'jhi-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  title = 'hellos  pinky !'
  constructor() {}
  ngOnInit(): void {
    // ...
  }
}

