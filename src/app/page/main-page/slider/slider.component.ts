import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  showIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  leftBtn(): void {
    if (this.showIndex !== 0) {
      this.showIndex--;
    }
  }

  rightBtn(): void {
    if (this.showIndex !== 4) {
      this.showIndex++;
    }
  }

  setIndex(val: number): void {
    this.showIndex = val;
  }

  getShowIndex(): number {
    return this.showIndex;
  }
}
