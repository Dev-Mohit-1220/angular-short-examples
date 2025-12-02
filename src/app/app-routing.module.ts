import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from './core/constants/path.constant';

const routes: Routes = [
  {
    path: Paths.EMPTY,
    loadChildren: () =>
      import('./features/features.module').then(
        (m) => m.FeaturesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
