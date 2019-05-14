import { Component } from '@angular/core';

@Component({
  selector: 'ngx-setting',
  templateUrl: './setting.component.html',
})
export class SettingComponent {
  checkoutdelay = '1';
  retrydelay = '2';
  notification = 'on';
  checkout = 'on';
  discord_hook_url = 'https://www.demo';
  username = 'joxroxagain';
  password= '123456';
  license_key= 'abcd1234';
  version_number = '1.0';

  password_type = 'password';
  license_type = 'password';

  onClickPassword() {
    this.password_type = 'text';
  }

  onClickLicense() {
    this.license_type = 'text';
  }
}
