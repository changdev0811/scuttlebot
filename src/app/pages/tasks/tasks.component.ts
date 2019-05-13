import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  checkboxModel = {
    small: false,
    medium: false,
    large: false,
    xlarge: false,
  };
}
