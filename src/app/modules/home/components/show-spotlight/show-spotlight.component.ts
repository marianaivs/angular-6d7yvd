import { Component } from '@angular/core';
import { Show } from '../../../../core/interfaces/show.interface';
import { ShowService } from '../../../../shared/services/show.service';

@Component({
  selector: 'app-show-spotlight',
  templateUrl: './show-spotlight.component.html',
  styleUrls: ['./show-spotlight.component.scss'],
})
export class ShowSpotlightComponent {
  shows!: Show[];

  constructor(private showService: ShowService) {
    this.shows = this.showService.getAllShows();
  }

  trackById(index: number, value: Show) {
    return value.id;
  }
}
