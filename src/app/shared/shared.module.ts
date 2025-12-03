import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HighlightPipe } from './pipe/highlight.pipe';
import { UppercasePipe } from './pipe/uppercase.pipe';
import { BoldHighlightPipe } from './pipe/boldhighlight.pipe';
import { CardComponent } from './components/card/card.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CardComponent,
    ConfirmationDialogComponent,
    HighlightPipe,
    UppercasePipe,
    BoldHighlightPipe,
  ],
  imports: [CommonModule, MatCardModule, MatDialogModule, MatButtonModule],
  exports: [
    CardComponent,
    HighlightPipe,
    UppercasePipe,
    BoldHighlightPipe,
    ConfirmationDialogComponent,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
