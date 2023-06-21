import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SectionHeroComponent } from './sections/section-hero/section-hero.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { SectionFeaturesComponent } from './sections/section-features/section-features.component';
import { ShowCarouselComponent } from './components/show-carousel/show-carousel.component';
import { ShowSpotlightComponent } from './components/show-spotlight/show-spotlight.component';

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
