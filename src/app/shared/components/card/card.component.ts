import { Component, Input } from '@angular/core';
import { CardConfiguration } from '../../../types/card.types';

@Component({
  selector: 'mike-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: false
})
export class CardComponent {
  @Input() cardList: CardConfiguration[] = [];
}
