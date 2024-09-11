import { Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: StartPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'project/:id', component: ProjectDetailComponent},
  { path: '**', redirectTo: '/home' }
];
