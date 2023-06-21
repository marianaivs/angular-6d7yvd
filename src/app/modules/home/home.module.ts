import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';

import { ShowCarouselComponent } from './components/show-carousel/show-carousel.component';
import { ShowSpotlightComponent } from './components/show-spotlight/show-spotlight.component';
import { SectionFeaturesComponent } from './components/section-features/section-features.component';
import { SectionHeroComponent } from './components/section-hero/section-hero.component';

const COMPONENTS = [
  HomeComponent,
  PageHomeComponent,
  PageAboutComponent,
  SectionHeroComponent,
  SectionFeaturesComponent,
  ShowCarouselComponent,
  ShowSpotlightComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [...COMPONENTS],
})
export class HomeModule {}
