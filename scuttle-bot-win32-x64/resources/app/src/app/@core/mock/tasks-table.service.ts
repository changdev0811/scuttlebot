import { Injectable } from '@angular/core';
import { TasksTableData } from '../data/tasks-table';

@Injectable()
export class TasksTableService extends TasksTableData {

  data = [{
    id: 1,
    keywords: 'Mark',
    size: 'Otto',
    profile: '@mdo',
  }, {
    id: 2,
    keywords: 'Jacob',
    size: 'Thornton',
    profile: '@fat',
  }, {
    id: 3,
    keywords: 'Larry',
    size: 'Bird',
    profile: '@twitter',
  }, {
    id: 4,
    keywords: 'John',
    size: 'Snow',
    profile: '@snow',
  }, {
    id: 5,
    keywords: 'Jack',
    size: 'Sparrow',
    profile: '@jack',
  }, {
    id: 6,
    keywords: 'Ann',
    size: 'Smith',
    profile: '@ann',
  }, {
    id: 7,
    keywords: 'Barbara',
    size: 'Black',
    profile: '@barbara',
  }, {
    id: 8,
    keywords: 'Sevan',
    size: 'Bagrat',
    profile: '@sevan',
  }, {
    id: 9,
    keywords: 'Ruben',
    size: 'Vardan',
    profile: '@ruben',
  }, {
    id: 10,
    keywords: 'Karen',
    size: 'Sevan',
    profile: '@karen',
  }, {
    id: 11,
    keywords: 'Mark',
    size: 'Otto',
    profile: '@mark',
  }, {
    id: 12,
    keywords: 'Jacob',
    size: 'Thornton',
    profile: '@jacob',
  }, {
    id: 13,
    keywords: 'Haik',
    size: 'Hakob',
    profile: '@haik',
  }, {
    id: 14,
    keywords: 'Garegin',
    size: 'Jirair',
    profile: '@garegin',
  }, {
    id: 15,
    keywords: 'Krikor',
    size: 'Bedros',
    profile: '@krikor',
  }];

  getData() {
    return this.data;
  }
}
