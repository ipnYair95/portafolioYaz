import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

const routes: Routes = [
  {
    path: '',
    children: [      
      { path: 'welcome', component: IndexComponent },
      { path: 'about', component: AboutComponent },
      { path: 'experiencias', component: ExperienciasComponent },
      { path: '**', redirectTo: 'welcome' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
