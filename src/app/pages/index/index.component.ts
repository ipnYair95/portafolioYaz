import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  titulo: string[];

  constructor() { 
    this.titulo = 'Yazmin Brum - Lic. Comunicación'.split(" ");
 
  }

  ngOnInit(): void {
  }

}
