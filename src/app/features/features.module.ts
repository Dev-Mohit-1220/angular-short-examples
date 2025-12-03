import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { SharedModule } from '../../app/shared/shared.module';
import { PipeViewerComponent } from './components/pipe-viewer/pipe-viewer.component';
import { DialogViewerComponent } from './components/dialog-viewer/dialog-viewer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormViewerComponent } from './components/form-viewer/form-viewer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OfServiceViewerComponent } from './components/of-service-viewer/of-service-viewer.component';

@NgModule({
  declarations: [
    FeatureListComponent,
    PipeViewerComponent,
    DialogViewerComponent,
    FormViewerComponent,
    OfServiceViewerComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class FeaturesModule {}
