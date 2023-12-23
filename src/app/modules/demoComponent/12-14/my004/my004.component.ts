import { Component, OnInit } from '@angular/core';
import { Item } from './my004.type';

@Component({
  selector: 'app-my004',
  // standalone: true,
  templateUrl: './my004.component.html',
})
export class My004Component implements OnInit {
  items: Item[] = [
    { id: 1, name: 'Item 1', selected: false },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false },
  ];

  toggleSelection(item: Item): void {
    item.selected = !item.selected;
  }

  getSelectedItems(): Item[] {
    return this.items.filter(item => item.selected);
  }
  ngOnInit(): void {}
}
