import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from '../core/constants/path.constant';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { PipeViewerComponent } from './components/pipe-viewer/pipe-viewer.component';

const routes: Routes = [
  {
    path: Paths.EMPTY,
    component: FeatureListComponent,
  },
  {
    path: Paths.PIPE,
    component: PipeViewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
