import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  loading: boolean = false;

  items: Item[] = [
    {
      titulo: 'Home',
      route: 'dashboard/welcome',
    },
    {
      titulo: 'About',
      route: 'dashboard/about',
    },
    {
      titulo: 'Trabajos propios',
      route: 'dashboard/portafolio',
    },
    {
      titulo: 'Experiencia y educación',
      route: 'dashboard/experiencias',
    },
    {
      titulo: 'Contactame',
      route: 'dashboard/contacto',
    }
  ];

  title = 'patita';

  constructor() {}
  
}

export interface Item {
  titulo: string;
  route: string;
}
