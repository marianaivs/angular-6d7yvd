import { Component, Input } from '@angular/core';

const PhoneMockupEnum = {
  Image: 'image',
  Video: 'video',
} as const;
type PhoneMockupType = typeof PhoneMockupEnum[keyof typeof PhoneMockupEnum];

@Component({
  selector: 'app-phone-mockup',
  templateUrl: 'phone-mockup.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }  
    `,
  ],
})
export class PhoneMockupComponent {
  @Input() src: string;

  phoneMockupEnum = PhoneMockupEnum;

  getSrcType(url: string): PhoneMockupType | undefined {
    if (!url) return undefined;

    return url.endsWith('.mp4') ? PhoneMockupEnum.Video : PhoneMockupEnum.Image;
  }
}
