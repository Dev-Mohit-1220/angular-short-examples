import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'mike-dialog-viewer',
  templateUrl: './dialog-viewer.component.html',
  styleUrl: './dialog-viewer.component.scss',
})
export class DialogViewerComponent {
  readonly dialog = inject(MatDialog);
  openConfirmDialog(): void {
    const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
      width: '550px',
      data: {
        title: 'Are you sure, you wanted to delete?',
        message:
          'Make sure before delete, once it deleted, there is no way to retrive...',
      },
    });

    confirmDialog.afterClosed().subscribe((dialogRes) => {
      console.log(dialogRes ? dialogRes : 'No dialog result');
    });
  }
}
