import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  abouts = [
    {
      titulo: '¿Quién soy',
      descripcion: 'Soy patita cara de godita la pizza con piña es riquisima',
    },
    {
      titulo: 'Objetivo',
      descripcion: `Aprender, desarrollar, y practicar los conocimientos que se genera en el ámbito laboral`,
    },
  ];

  acts = [
    {
      titulo: 'Aptitudes',
      items: [
        'Responsable',
        'Creativa',
        'Adaptable',
        'Liderazgo',
        'Respeto',
        'Flexible',
        'Puntual',
        'Organizada',
      ],
    },
    {
      titulo: 'Intereses',
      items: [
        'Escritura creativa',
        'Lectura',
        'Podcast',
        'Música',
        'Streaming',
        'Conducción tv',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
