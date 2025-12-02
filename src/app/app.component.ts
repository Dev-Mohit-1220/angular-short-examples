import { Component } from '@angular/core';
import { CardConfiguration } from './types/card.types';

@Component({
  selector: 'mike-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-short-examples';
  list: CardConfiguration[] = [
    {
      title: 'test',
      navigation: 'test'
    },
    {
      title: 'test',
      navigation: 'test'
    },
  ]
}
