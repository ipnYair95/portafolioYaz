import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ContactoComponent } from './contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
  

@NgModule({
  declarations: [IndexComponent, AboutComponent, ExperienciasComponent, PortafolioComponent, ContactoComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    YouTubePlayerModule,
    ReactiveFormsModule
    
  ]
})
export class PagesModule { }
