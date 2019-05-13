import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { CreateModule } from './create/create.module';
import { TasksModule } from './tasks/tasks.module';
import { ProxiesModule } from './proxies/proxies.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    CreateModule,
    TasksModule,
    ProxiesModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
