import { Component } from '@angular/core';

@Component({
  selector: 'app-section-hero',
  templateUrl: './section-hero.component.html',
  styles: [
    `:host {
    display: flex;
    flex-direction: column;
  }
  `,
  ],
})
export class SectionHeroComponent {}
