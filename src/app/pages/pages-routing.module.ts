import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { CreateComponent } from './create/create.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'create',
      component: CreateComponent,
    },
    {
      path: 'tasks',
      component: TasksComponent,
    },
    {
      path: '',
      redirectTo: 'create',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
