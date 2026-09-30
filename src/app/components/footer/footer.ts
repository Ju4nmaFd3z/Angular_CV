import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  nombre = 'Juanma Fernández Rodríguez';
  textoPie = 'Currículum desarrollado con Angular';
  fecha = new Date();
}
