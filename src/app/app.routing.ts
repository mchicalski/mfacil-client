import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisCenterComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: {
      title: 'Heroes List'
    }
  },
  { path: 'site/:id', component: SiteDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);