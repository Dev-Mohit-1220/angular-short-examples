import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { SharedModule } from '../../app/shared/shared.module';

@NgModule({
  declarations: [FeatureListComponent],
  imports: [CommonModule, FeaturesRoutingModule, SharedModule],
})
export class FeaturesModule {}
