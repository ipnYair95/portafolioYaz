import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    children: [      
      { path: 'welcome', component: IndexComponent },
      { path: 'about', component: AboutComponent },
      { path: 'experiencias', component: ExperienciasComponent },
      { path: 'portafolio', component: PortafolioComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: '**', redirectTo: 'welcome' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
