import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LayoutDefaultComponent } from '../layouts/layout-default/layout-default.component';
import { LayoutSimpleComponent } from '../layouts/layout-simple/layout-simple.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { PhoneMockupComponent } from './components/phone-mockup/phone-mockup.component';
import { CommunityListComponent } from './components/community-list/community-list.component';
import { SectionNewsletterComponent } from './components/section-newsletter/section-newsletter.component';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [
  // layouts
  LayoutDefaultComponent,
  LayoutSimpleComponent,

  // components
  ButtonComponent,
  HeaderComponent,
  PhoneMockupComponent,
  CommunityListComponent,
  SectionNewsletterComponent,
  FooterComponent,
];

const DIRECTIVES = [];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [...COMPONENTS, ...DIRECTIVES],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
