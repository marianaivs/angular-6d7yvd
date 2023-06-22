import { Component } from '@angular/core';
import { Show } from '../../../../core/interfaces/show.interface';
import { ShowService } from '../../../../shared/services/show.service';

@Component({
  selector: 'app-section-trailers',
  templateUrl: './section-trailers.component.html',
  styles: [
    `:host {
    display: flex;
    flex-direction: column;
  }
  `,
  ],
})
export class SectionTrailersComponent {
  shows!: Show[];

  constructor(private showService: ShowService) {
    this.shows = this.showService.getAllShows();
  }

  trackById(index: number, value: Show) {
    return value.id;
  }
}
