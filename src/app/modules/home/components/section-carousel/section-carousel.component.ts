import { Component } from '@angular/core';
import { Show } from '../../../../core/interfaces/show.interface';

@Component({
  selector: 'app-section-carousel',
  template: `
  <section class="bg-gray-100 py-60px">
  <div class="flex flex-nowrap flex-row justify-center gap-8">
    <ng-container *ngIf="shows.length; else posterEmptyState">
      <!--<show-poster *ngFor="let show of shows; trackBy: trackById" [show]="show"></show-poster>-->
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
  shows: Show[] = [];

  trackById(index: number, value: Show) {
    return value.id;
  }
}
