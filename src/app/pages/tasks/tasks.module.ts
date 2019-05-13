import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { TasksComponent } from './tasks.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    TasksComponent,
  ],
})
export class TasksModule { }
