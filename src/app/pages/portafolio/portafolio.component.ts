import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  videos = [
    {
      titulo: 'Programa: Entre mujeres abiertas',
      descripcion: '',
      target: `https://www.youtube.com/embed/vKC_IUiiHMU`
    },
    {
      titulo: 'Inscripciones a escuela secundaria Nezahualcoyotl',
      descripcion: '',
      target: `https://www.youtube.com/embed/hcqLNqPuH3o`
    },
    {
      titulo: 'Promo Bikers Crew',
      descripcion: '',
      target: `https://www.youtube.com/embed/n-IKvycbxds`
    }
    ,
    {
      titulo: 'Buscando en la noche',
      descripcion: '',
      target: `https://www.youtube.com/embed/eoqjGb-g1fk`
    }
  ]

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  transform(url: string) : string{
    let ruta =  url.split("embed/")[1];
    console.log(ruta);
    return ruta;
  }

}
