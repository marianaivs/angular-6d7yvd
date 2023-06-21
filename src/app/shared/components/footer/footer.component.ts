import { Component } from '@angular/core';

interface Social {
  id: string;
  name: string;
  image: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
    :host {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      padding-top: 1rem;
    }
    `,
  ],
})
export class FooterComponent {
  socials: Social[] = [
    {
      id: 'social1',
      name: 'Twitter',
      image: 'icon-twitter',
    },
    {
      id: 'social2',
      name: 'Facebook',
      image: 'icon-facebook',
    },
    {
      id: 'social3',
      name: 'YouTube',
      image: 'icon-youtube',
    },
  ];

  trackById(index: number, value: Social) {
    return value.id;
  }
}
