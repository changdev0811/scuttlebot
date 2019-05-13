import { Component } from '@angular/core';

@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  checkboxModel = {
    small: false,
    medium: false,
    large: false,
    xlarge: false,
  };
}
