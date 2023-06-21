import { Component, HostBinding, Input } from '@angular/core';
import { convertToBoolProperty } from '../../utils/convert';

const ButtonAppearanceEnum = {
  Flat: 'flat',
  Ghost: 'ghost',
} as const;
type ButtonAppearance = typeof ButtonAppearanceEnum[keyof typeof ButtonAppearanceEnum];

@Component({
  selector: '[altButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() appearance: ButtonAppearance = ButtonAppearanceEnum.Flat;

  @Input()
  @HostBinding('class.appearance-flat')
  get flat(): boolean {
    return this.appearance === 'flat';
  }
  set flat(value: boolean) {
    console.log('ASD:', convertToBoolProperty(value));
    if (convertToBoolProperty(value)) {
      this.appearance = 'flat';
    }
  }

  @Input()
  @HostBinding('class.appearance-ghost')
  get ghost(): boolean {
    return this.appearance === 'ghost';
  }
  set ghost(value: boolean) {
    if (convertToBoolProperty(value)) {
      this.appearance = 'ghost';
    }
  }
}
