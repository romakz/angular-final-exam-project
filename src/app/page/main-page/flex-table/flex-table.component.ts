import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-table',
  templateUrl: './flex-table.component.html',
  styleUrls: ['./flex-table.component.scss']
})
export class FlexTableComponent implements OnInit {
  productTypes: string[] = [
    'Смартфоны и гаджеты',
    'Ноутбуки и компьютеры',
    'Всё для геймеров'
  ];

  activeIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setActiveIndex(index: number): void {
    this.activeIndex = index;
  }

  getActiveIndex(): number {
    return this.activeIndex;
  }

}
