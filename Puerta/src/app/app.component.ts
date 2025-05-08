import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from "./botones/botones.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContadorComponent, BotonesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Puerta';
  puertaEscogidaNum!: number;
  cambio!:boolean;

  puertaEscogida(number:number){
    this.puertaEscogidaNum=number;
  }
  cambioHecho(cambio :boolean){
    this.cambio=cambio;
  }
}
