import { Injectable } from '@angular/core';
import { ProxiesTableData } from '../data/proxies-table';

@Injectable()
export class ProxiesTableService extends ProxiesTableData {

  data = [{
    ip: '120.134.120.123',
    port: 'Mark',
    username: 'Otto',
    password: '@mdo',
  }, {
    ip: '120.134.120.123',
    port: 'Jacob',
    username: 'Thornton',
    password: '@fat',
  }, {
    ip: '120.134.120.123',
    port: 'Larry',
    username: 'Bird',
    password: '@twitter',
  }, {
    ip: '120.134.120.123',
    port: 'John',
    username: 'Snow',
    password: '@snow',
  }, {
    ip: '120.134.120.123',
    port: 'Jack',
    username: 'Sparrow',
    password: '@jack',
  }, {
    ip: '120.134.120.123',
    port: 'Ann',
    username: 'Smith',
    password: '@ann',
  }, {
    ip: '120.134.120.123',
    port: 'Barbara',
    username: 'Black',
    password: '@barbara',
  }, {
    ip: '120.134.120.123',
    port: 'Sevan',
    username: 'Bagrat',
    password: '@sevan',
  }, {
    ip: '120.134.120.123',
    port: 'Ruben',
    username: 'Vardan',
    password: '@ruben',
  }, {
    ip: '120.134.120.123',
    port: 'Karen',
    username: 'Sevan',
    password: '@karen',
  }, {
    ip: '120.134.120.123',
    port: 'Mark',
    username: 'Otto',
    password: '@mark',
  }, {
    ip: '120.134.120.123',
    port: 'Jacob',
    username: 'Thornton',
    password: '@jacob',
  }, {
    ip: '120.134.120.123',
    port: 'Haik',
    username: 'Hakob',
    password: '@haik',
  }, {
    ip: '120.134.120.123',
    port: 'Garegin',
    username: 'Jirair',
    password: '@garegin',
  }, {
    ip: '120.134.120.123',
    port: 'Krikor',
    username: 'Bedros',
    password: '@krikor',
  }];

  getData() {
    return this.data;
  }
}
