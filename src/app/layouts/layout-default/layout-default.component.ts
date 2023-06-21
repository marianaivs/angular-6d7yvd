import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-default',
  template: `
    <app-header></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
    <app-footer></app-footer>
    `,
  styles: [
    `
    :host {
      min-height: 100vh;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
    }
  
    main {
      flex: 1;
    }
    `,
  ],
})
export class LayoutDefaultComponent {}
