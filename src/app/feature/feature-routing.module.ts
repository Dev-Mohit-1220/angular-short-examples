import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipeViewerComponent } from './custom-pipe-viewer/custom-pipe-viewer.component';
import { Paths } from '../core/constants/path.constant';

const routes: Routes = [
  {
    path: Paths.EMPTY,
    component: CustomPipeViewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
