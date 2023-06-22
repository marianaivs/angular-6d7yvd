import { Component } from '@angular/core';

@Component({
  selector: 'app-section-newsletter',
  templateUrl: './section-newsletter.component.html',
  styles: [
    `:host {
    display: flex;
    flex-direction: column;
  }
  `,
  ],
})
export class SectionNewsletterComponent {
  constructor() {}
}
