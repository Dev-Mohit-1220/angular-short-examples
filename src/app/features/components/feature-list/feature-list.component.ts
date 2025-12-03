import { Component, inject } from '@angular/core';
import { CardConfiguration } from '../../../types/card.types';
import { Router } from '@angular/router';

@Component({
  selector: 'mike-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrl: './feature-list.component.scss',
})
export class FeatureListComponent {
  router = inject(Router);

  list: CardConfiguration[] = [
    {
      title: 'Pipe Examples',
      navigation: '/features',
    },
    {
      title: 'Dialog Example (Delete)',
      navigation: '/dialog',
    },
  ];

  onCardSelect(value: CardConfiguration): void {
    if (value?.navigation) {
      this.router.navigate([value.navigation]);
    }
  }
}
