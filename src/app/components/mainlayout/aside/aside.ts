import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-aside',
  styleUrl: './aside.css',
  templateUrl: './aside.html',
})
export class Aside {
  direccion = 'Calle Campanilleros 13, Málaga, España';
  telefono = '+34 643718054';
  correoElectronico = 'juanmafr2007@gmail.com';
  sitioWeb = 'https://juanma-dev-portfolio.vercel.app';
  github = 'Ju4nmaFd3z';
  idiomas = ['Español (Nativo)', 'Inglés (Intermedio)', 'Italiano (Básico)'];
}
