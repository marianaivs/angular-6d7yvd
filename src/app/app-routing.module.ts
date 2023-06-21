import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';
import { LayoutSimpleComponent } from './layouts/layout-simple/layout-simple.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('./modules/home/home.module')).HomeModule,
      },
    ],
  },
  {
    path: '**',
    component: LayoutSimpleComponent,
    children: [
      {
        path: '',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
