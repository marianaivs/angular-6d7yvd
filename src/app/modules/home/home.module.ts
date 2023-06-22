import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';

import { SectionHeroComponent } from './components/section-hero/section-hero.component';
import { SectionFeaturesComponent } from './components/section-features/section-features.component';
import { ShowPosterComponent } from './components/show-poster/show-poster.component';
import { SectionCarouselComponent } from './components/section-carousel/section-carousel.component';
import { SectionTrailersComponent } from './components/section-trailers/section-trailers.component';

const COMPONENTS = [
  HomeComponent,
  PageHomeComponent,
  PageAboutComponent,
  SectionHeroComponent,
  SectionFeaturesComponent,
  ShowPosterComponent,
  SectionCarouselComponent,
  SectionTrailersComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [...COMPONENTS],
})
export class HomeModule {}
