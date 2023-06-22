import { Component, Input } from '@angular/core';
import { ShowService } from '../../../../shared/services/show.service';
import { Show } from '../../../../core/interfaces/show.interface';

@Component({
  selector: 'app-section-carousel',
  template: `
  <section class="bg-gray-100 py-60px">
  <div class="flex flex-nowrap flex-row justify-center gap-8">
    <ng-container *ngIf="shows.length; else posterEmptyState">
      <ng-template ngFor [ngForOf]="shows" let-show>
        <app-show-poster></app-show-poster>
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
  @Input() show!: Show;

  constructor(private showService: ShowService) {
    this.show = this.showService.getAllShows();
  }

  trackById(index: number, value: Show) {
    return value.id;
  }
}
