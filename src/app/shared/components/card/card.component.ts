import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardConfiguration } from '../../../types/card.types';

@Component({
  selector: 'mike-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardList: CardConfiguration[] = [];
  @Output() onClick = new EventEmitter<CardConfiguration>();

  onCardClick(value?: CardConfiguration): void {
    if (value) this.onClick.emit(value);
  }
}
