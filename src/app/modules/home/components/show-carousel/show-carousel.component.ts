import { Component } from '@angular/core';
import { Show } from '../../../../core/interfaces/show.interface';

@Component({
  selector: 'app-show-carousel',
  templateUrl: './show-carousel.component.html',
  styleUrls: ['./show-carousel.component.scss'],
})
export class ShowCarouselComponent {
  shows: Show[] = [];

  trackById(index: number, value: Show) {
    return value.id;
  }
}
