import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Mainlayout } from './components/mainlayout/mainlayout';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Mainlayout, Footer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';
}
