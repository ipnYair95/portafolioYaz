import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

@NgModule({
  declarations: [IndexComponent, AboutComponent, ExperienciasComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
