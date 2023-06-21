import { Component, Input } from '@angular/core';

const PhoneMockupEnum = {
  Image: 'image',
  Video: 'video',
} as const;
type PhoneMockupType = typeof PhoneMockupEnum[keyof typeof PhoneMockupEnum];

@Component({
  selector: 'app-phone-mockup',
  template: `
    <div class="flex justify-center relative shrink-0 z-10">
      <video *ngIf="getSrcType(src) && getSrcType(src) === phoneMockupEnum.Video" [src]="src" class="absolute max-h-[600px] top-0 w-auto z-50"></video>
      <img
        *ngIf="getSrcType(src) && getSrcType(src) === phoneMockupEnum.Image"
        [src]="src"
        class="absolute max-h-[600px] top-0 w-auto z-50"
      />
      <img src="https://raw.githubusercontent.com/marianaivs/angular-bktjab/main/assets/app-mockup.png" class="max-h-[600px] rounded-[50px]" />
    </div>
  `,
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
