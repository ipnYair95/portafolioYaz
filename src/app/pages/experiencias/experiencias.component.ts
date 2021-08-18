import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experiencias = [
    {
      titulo: 'H. CÁMARA DE DIPUTADOS LXII LEGISLATURA',
      img: '../../../assets/camara.jpg',
      descripcion: `Dar mantenimiento a las computadoras, instalar programas, capturar datos y realizar inventarios.`
    },
    {
      titulo: 'PROCURADURÍA GENERAL DE JUSTICIA',
      img: '../../../assets/pgj.jpg',
      descripcion: `Buscar, escanear, digitalizar y coser expedientes.`
    }
  ]

  educacion = [
    {
      titulo: 'LICENCIATURA PASANTE • CIENCIAS DE LA COMUNICACIÓN 2017-2020 • CESCIJUC',
      img: '../../../assets/camara.jpg',
      descripcion: `Dar mantenimiento a las computadoras, instalar programas, capturar datos y realizar inventarios.`
    },
    {
      titulo: 'CONALEP IXTAPALUCA 236 • P.T.B EN INFORMÁTICA • 2012-2015',
      img: '../../../assets/pgj.jpg',
      descripcion: `Buscar, escanear, digitalizar y coser expedientes.`
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
