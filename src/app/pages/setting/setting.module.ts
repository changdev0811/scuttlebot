import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { SettingComponent } from './setting.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    SettingComponent,
  ],
})
export class SettingModule { }
