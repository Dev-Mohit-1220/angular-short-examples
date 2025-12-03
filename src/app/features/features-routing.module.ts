import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from '../core/constants/path.constant';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { PipeViewerComponent } from './components/pipe-viewer/pipe-viewer.component';
import { DialogViewerComponent } from './components/dialog-viewer/dialog-viewer.component';
import { FormViewerComponent } from './components/form-viewer/form-viewer.component';
import { OfServiceViewerComponent } from './components/of-service-viewer/of-service-viewer.component';

const routes: Routes = [
  {
    path: Paths.EMPTY,
    component: FeatureListComponent,
  },
  {
    path: Paths.PIPE,
    component: PipeViewerComponent,
  },
  {
    path: Paths.DIALOG,
    component: DialogViewerComponent,
  },
  {
    path: Paths.FORM,
    component: FormViewerComponent,
  },
  {
    path: Paths.OF_SERVICE,
    component: OfServiceViewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
