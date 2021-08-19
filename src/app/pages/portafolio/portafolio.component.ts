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
      titulo: 'Vida perfecta',
      target: 'https://www.youtube.com/watch?v=8UN3WBeqpY0'
    },
    {
      titulo: 'Buscando en la noche',
      target: 'https://www.youtube.com/watch?v=vsCitnhenJw'
    },
    {
      titulo: 'Buscando en la noche',
      target: 'https://www.youtube.com/watch?v=vsCitnhenJw'
    }
    ,
    {
      titulo: 'Buscando en la noche',
      target: 'https://www.youtube.com/watch?v=vsCitnhenJw'
    }
  ]

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  transform(url: string) : string{
    return url.split("=")[1];
  }

}
