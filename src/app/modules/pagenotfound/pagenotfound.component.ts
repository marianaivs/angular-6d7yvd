import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagenotfound',
  template: `<div class="flex flex-col h-screen justify-center text-center">
  <h1 class="font-bold text-2xl text-primary lg:text-3xl">404 Error</h1>
  <h2 class="font-semibold mb-4 text-xl text-primary">Page Not Found</h2>
  <p class="text-base text-gray-900 lg:text-xl">Where have all the pages gone? 👀</p>
</div>
`,
  styles: [
    `
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    `,
  ],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
