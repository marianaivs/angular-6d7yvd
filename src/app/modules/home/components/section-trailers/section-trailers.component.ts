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

  @media only screen and (min-width: 1280px) {
    .custom-margin {
      max-width: 600px;
      margin-left: calc(50% - 600px);
    }
  }
  `,
  ],
})
export class SectionTrailersComponent {
  shows!: Show[];

  constructor(private showService: ShowService) {
    this.shows = this.showService.getAllShows();
  }

  handleClick(event: Event) {
    console.log(event);
  }

  trackById(index: number, value: Show) {
    return value.id;
  }
}
