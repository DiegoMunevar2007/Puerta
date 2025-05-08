import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {

  cantidadGanados : number;
  cantidadPerdidas : number;
  constructor() {
    this.cantidadGanados=0;
    this.cantidadPerdidas=0;
   }

   gano(){
    this.cantidadGanados+=1;
   }
   perdio(){
    this.cantidadPerdidas+=1;
   }

  ngOnInit() {
  }

}
