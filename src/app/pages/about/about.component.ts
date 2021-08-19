import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  bandera: boolean = false;

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

  imagenes = [
    '../../../assets/skills/after.png',
    '../../../assets/skills/auda.png',
    '../../../assets/skills/celtx.jpg',
    '../../../assets/skills/filmo.png',
    '../../../assets/skills/obs.png',
    '../../../assets/skills/office.jpg',
    '../../../assets/skills/premie.png',
  ];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.bandera = !this.bandera;
    }, 1000);
  }

  animar() {
    if (this.bandera) {
      return 'animarOn';
    }

    return 'animarOff';
  }
}
