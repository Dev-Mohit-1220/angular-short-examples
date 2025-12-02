import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HighlightPipe } from './pipe/highlight.pipe';
import { UppercasePipe } from './pipe/uppercase.pipe';
import { BoldHighlightPipe } from './pipe/boldhighlight.pipe';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    CardComponent,
    HighlightPipe,
    UppercasePipe,
    BoldHighlightPipe,
  ],
  imports: [CommonModule, MatCardModule,],
  exports: [CardComponent, HighlightPipe, UppercasePipe, BoldHighlightPipe],
})
export class SharedModule {}
