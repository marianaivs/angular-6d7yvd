import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<router-outlet></router-outlet>
  `,
  styles: [
    `:host {
    display: flex;
    flex-direction: column;
  }
  `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
