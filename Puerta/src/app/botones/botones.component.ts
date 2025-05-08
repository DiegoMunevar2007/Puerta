import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css'],
  imports: [NgIf]
})
export class BotonesComponent implements OnInit {
  paso : number;
  @Output() puertaEscogida!:EventEmitter<number>;
  @Output() cambio!: EventEmitter<boolean>
  constructor() { 
    this.paso=1;
  }

  ngOnInit() {

  }
  onPuertaEscogida(puerta:number){
    this.paso+=1;
    this.puertaEscogida.emit(puerta);
  }
  onCambio(cambio:boolean){
    this.cambio.emit(cambio);
  }


}
