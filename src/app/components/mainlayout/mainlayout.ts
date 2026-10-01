import { Component } from '@angular/core';
import { Aside } from './aside/aside';
import { Main } from './main/main';

@Component({
  imports: [Aside, Main],
  selector: 'div[attr-main]',
  styleUrl: './mainlayout.css',
  templateUrl: './mainlayout.html',
})
export class Mainlayout {
}
