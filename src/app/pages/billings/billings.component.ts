import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { BillingsTableData } from '../../@core/data/billings-table';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-billings',
  templateUrl: './billings.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class BillingsComponent {
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
      ip: {
        title: 'IP',
        type: 'string',
      },
      port: {
        title: 'PORT',
        type: 'string',
      },
      username: {
        title: 'USERNAME',
        type: 'string',
      },
      password: {
        title: 'PASSWORD',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: BillingsTableData) {
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

  show: boolean = false;
}
