import { Component, Input } from '@angular/core';
import { Show } from '../../../../core/interfaces/show.interface';
import { ShowService } from '../../../../shared/services/show.service';

@Component({
  selector: 'app-section-carousel',
  template: `
  <section class="bg-gray-100 py-60px">
  <div class="flex flex-nowrap flex-row justify-center gap-8">
   <ng-container *ngIf="show.length; else posterEmptyState">
      <ng-template *ngFor="let show of shows">
        <app-show-poster [show]="show"></app-show-poster>
      </ng-template>
    </ng-container>
    <ng-template #posterEmptyState>
      <p>Where did all the shows go?</p>
    </ng-template>
  </div>
</section>
`,
  styles: [
    `
    :host {
      display: flex;
      flex-direction: column;
    }
  `,
  ],
})
export class SectionCarouselComponent {
  show!: Show[];

  /* constructor(private showService: ShowService) {
    this.show = this.showService.getAllShows();
  } */

  trackById(index: number, value: Show) {
    return value.id;
  }
}
