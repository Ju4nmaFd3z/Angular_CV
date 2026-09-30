import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  nombre = 'Juanma Fernández Rodríguez';
  profesion = 'Desarrollador de Aplicaciones Multiplataforma';
  frase = 'Me apasiona entender cómo funcionan las cosas por dentro y aplicar buenas prácticas.';
}
