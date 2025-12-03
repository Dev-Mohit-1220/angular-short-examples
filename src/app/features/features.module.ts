import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { SharedModule } from '../../app/shared/shared.module';
import { PipeViewerComponent } from './components/pipe-viewer/pipe-viewer.component';
import { DialogViewerComponent } from './components/dialog-viewer/dialog-viewer.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    FeatureListComponent,
    PipeViewerComponent,
    DialogViewerComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule, SharedModule, MatDialogModule],
})
export class FeaturesModule {}
