import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    CreateComponent,
  ],
})
export class CreateModule { }
