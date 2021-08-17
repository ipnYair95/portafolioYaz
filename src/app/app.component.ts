import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
  ];

  title = 'patita';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
    }, 3000);
  }
}

export interface Item {
  titulo: string;
  route: string;
}
