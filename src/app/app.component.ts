import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('Hello World');
  }
}
