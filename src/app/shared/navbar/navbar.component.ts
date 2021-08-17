import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
