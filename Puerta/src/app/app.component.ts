import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PuertaComponent } from './puerta/puerta.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    PuertaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Puerta';
}
