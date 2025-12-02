import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from './core/constants/path.constant';

const routes: Routes = [
  {
    path: Paths.EMPTY,
    loadChildren: () =>
      import('./feature/feature-routing.module').then(
        (m) => m.FeatureRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
