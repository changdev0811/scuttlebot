import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { TasksTableData } from '../../@core/data/tasks-table';

@Component({
  selector: 'ngx-tasks',
  templateUrl: './tasks.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class TasksComponent {
  settings = {
    pager : {
      display : false,
    },
    // add: false
    actions: {
      add: false,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      keywords: {
        title: 'KEYWORDS',
        type: 'string',
      },
      size: {
        title: 'SIZE',
        type: 'string',
      },
      profile: {
        title: 'PROFILE',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: TasksTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
