import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { ProxiesTableData } from '../../@core/data/proxies-table';

@Component({
  selector: 'ngx-proxy',
  templateUrl: './proxies.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class ProxiesComponent {
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

  constructor(private service: ProxiesTableData) {
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
