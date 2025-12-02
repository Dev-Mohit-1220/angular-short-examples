import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { CustomPipeViewerComponent } from './custom-pipe-viewer/custom-pipe-viewer.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    CustomPipeViewerComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule
  ]
})
export class FeatureModule { }
