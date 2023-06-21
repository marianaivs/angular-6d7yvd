import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<!-- <hero></hero>
  -->
 
 <app-community-list></app-community-list>
 
 <app-newsletter></app-newsletter>
 `,
  styles: [``],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
