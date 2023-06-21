import { Component } from '@angular/core';

interface Feature {
  id: string;
  name: string;
  gradient: FeatureGradientType;
  description: string;
  iconSvg: string;
}

const FeatureGradientEnum = {
  Gradient1: 'gradient1',
  Gradient2: 'gradient2',
  Gradient3: 'gradient3',
} as const;
type FeatureGradientType = typeof FeatureGradientEnum[keyof typeof FeatureGradientEnum];

@Component({
  selector: 'app-section-features',
  templateUrl: './section-features.component.html',
  styleUrls: ['./section-features.component.scss'],
})
export class SectionFeaturesComponent {
  features: Feature[] = [
    {
      id: 'feature1',
      name: 'Automated tracking',
      gradient: FeatureGradientEnum.Gradient1,
      description: 'Track your favorite shows automatically without switching between apps.',
      iconSvg:
        '<svg class="-ms-1" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9769 16.9316L9.09843 25.8506C8.59352 26.1533 7.94344 25.9815 7.64644 25.467C7.55056 25.3009 7.5 25.1117 7.5 24.9189V7.08089C7.5 6.48393 7.97487 6 8.56065 6C8.74976 6 8.93543 6.05152 9.09843 6.14923L23.9769 15.0683C24.4819 15.3709 24.6504 16.0334 24.3534 16.5479C24.262 16.7064 24.1324 16.8384 23.9769 16.9316Z" fill="white"/></svg>',
    },
    {
      id: 'feature2',
      name: 'Machine learning',
      gradient: FeatureGradientEnum.Gradient2,
      description: 'Get recommendations like never before, which are truly customized for your taste.',
      iconSvg:
        '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 6.5C2.39543 6.5 1.5 7.39543 1.5 8.5V23.5C1.5 24.6046 2.39543 25.5 3.5 25.5H28.5C29.6046 25.5 30.5 24.6046 30.5 23.5V8.5C30.5 7.39543 29.6046 6.5 28.5 6.5H3.5ZM8.73438 10.125H7.65625H6.75H5.67969V21.5H8.01562V18.2656L7.78241 12.9828L10.8594 21.5H12.4531L15.5301 12.9828L15.2969 18.2656V21.5H17.6406V10.125H16.5625H15.6562H14.5781L11.6562 18.4766L8.73438 10.125ZM27.0078 21.5V19.6719H22.0391V10.125H19.6953V21.5H21.2812H22.0391H27.0078Z" fill="white"/></svg>',
    },
    {
      id: 'feature3',
      name: 'Smart notifications',
      gradient: FeatureGradientEnum.Gradient3,
      description: 'Receive smart notifications exactly at the right moments when you need them.',
      iconSvg:
        '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7703 7.36486C19.7703 10.0517 21.9483 12.2297 24.6351 12.2297C27.3219 12.2297 29.5 10.0517 29.5 7.36486C29.5 4.67807 27.3219 2.5 24.6351 2.5C21.9483 2.5 19.7703 4.67807 19.7703 7.36486ZM17.8319 7.04054C17.8528 6.59561 17.9163 6.16184 18.0186 5.74324H9.39201C7.24251 5.74324 5.5 7.48615 5.5 9.63525V22.608C5.5 24.7575 7.2429 26.5 9.39201 26.5H22.3648C24.5142 26.5 26.2568 24.7571 26.2568 22.608V13.9814C25.8382 14.0837 25.4044 14.1472 24.9595 14.1681V22.608C24.9595 24.0408 23.7976 25.2027 22.3648 25.2027H9.39201C7.95923 25.2027 6.7973 24.0409 6.7973 22.608V9.63525C6.7973 8.20247 7.95914 7.04054 9.39201 7.04054H17.8319Z" fill="white"/></svg>',
    },
  ];

  trackById(index: number, value: Feature) {
    return value.id;
  }

  // for the icon SVG
  getIcon(svgStr: string): string {
    return `data:image/svg+xml; utf8, ${svgStr}`;
  }
}
