import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit  {
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
      titulo: 'Contáctame',
      route: 'dashboard/contacto',
    }
  ];

  title = 'patita';

  constructor() {}

  ngOnInit(): void {
    this.loading = true;
      /* setTimeout(() => {
        this.loading = true;
      }, 2500); */
  }

}

export interface Item {
  titulo: string;
  route: string;
}
