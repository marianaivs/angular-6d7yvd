import { Component, OnInit } from '@angular/core';
import { Show } from '../../../../core/interfaces/show.interface';
import { ShowService } from '../../../../shared/services/show.service';

@Component({
  selector: 'app-section-carousel',
  templateUrl: 'section-carousel.component.html',
  styleUrls: ['section-carousel.component.scss'],
})
export class SectionCarouselComponent implements OnInit {
  shows!: Show[];

  constructor(private showService: ShowService) {}

  ngOnInit(): void {
    this.shows = this.showService.getAllShows();
  }

  trackById(index: number, value: Show) {
    return value.id;
  }
}
