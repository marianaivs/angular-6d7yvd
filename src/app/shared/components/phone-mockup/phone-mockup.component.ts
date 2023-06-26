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
      
      .iphone-mask {
        mask-position: center;
        -webkit-mask-position: center;
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
        mask-size: contain;
        -webkit-mask-size: contain;
        mask-image: url('../assets/img/phone-frame.png');
        -webkit-mask-image: url('../assets/img/phone-frame.png');
      }

      .floating {
        animation: floating 4s linear infinite;
      }
      
      @keyframes floating {
        0% {
          transform: translateY(10px);
        }
        50% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(10px);
        }
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
