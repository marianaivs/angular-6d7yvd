import { Component, OnInit } from '@angular/core';
import { Show } from '../../../../core/interfaces/show.interface';
import { ShowService } from '../../../../shared/services/show.service';

@Component({
  selector: 'app-section-carousel',
  template: `
  <section class="bg-gray-100 py-60px">
  <div class="flex flex-nowrap flex-row justify-center gap-8 ltr2">
   <ng-container *ngIf="shows.length; else posterEmptyState">
      <ng-container *ngFor="let show of shows">
        <app-show-poster [show]="show"></app-show-poster>
      </ng-container>
      <ng-container *ngFor="let show of shows">
        <app-show-poster [show]="show"></app-show-poster>
      </ng-container>
    </ng-container>
    <ng-template #posterEmptyState>
      <p>Where did all the shows go?</p>
    </ng-template>
  </div>
</section>
`,
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
