import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-simple',
  template: `<router-outlet></router-outlet>
  `,
  styles: [
    `:host {
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
  }
  `,
  ],
})
export class LayoutSimpleComponent {}
