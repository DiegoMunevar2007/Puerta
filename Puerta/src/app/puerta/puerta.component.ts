import { Component, OnInit } from '@angular/core';
import { Puerta } from './puerta';

@Component({
  selector: 'app-puerta',
  standalone: true,
  templateUrl: './puerta.component.html',
  styleUrls: ['./puerta.component.css']
})
export class PuertaComponent implements OnInit {

  puerta1!: Puerta;
  puerta2!: Puerta;
  puerta3!: Puerta;
  puertaselected!: Puerta;

  constructor() { }

  ngOnInit() {
    this.puerta1 = new Puerta(false, false);
    this.puerta2 = new Puerta(false, false);
    this.puerta3 = new Puerta(false, false);;
  }

  seleccionarPuerta(puerta: Puerta) {
    puerta.selected = true;
    this.puertaselected = puerta;
  }

}
