import { Component, OnInit } from '@angular/core';
import { Store } from '../models/store';
import { STORES } from '../mock/mock-stores';

@Component({
  selector: 'app-stores-list',
  templateUrl: './storesList.component.html',
  styleUrls: ['./storesList.component.css']
})
export class StoresListComponent implements OnInit {

  stores = STORES;

  selectedStore: Store;

  onSelect(store: Store): void {
    this.selectedStore = store;
  }

  constructor() { }

  ngOnInit() {
  }

}
