import { Component, Input } from '@angular/core';
import { Show } from '../../../../core/interfaces/show.interface';
import { ShowService } from '../../../../shared/services/show.service';

@Component({
  selector: 'app-show-poster',
  templateUrl: './show-poster.component.html',
  styles: [
    `
  :host {
    display: flex;
    flex-direction: column;
  }
  `,
  ],
})
export class ShowPosterComponent {
  shows!: Show[];

  constructor(private showService: ShowService) {
    this.shows = this.showService.getAllShows();
  }

  trackById(index: number, value: Show) {
    return value.id;
  }
}
