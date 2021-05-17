import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {
  @Output() restRequest = new EventEmitter<string>();

  filterForm = new FormGroup({
    priceLeft: new FormControl(0),
    priceRight: new FormControl(199990),
    apple: new FormControl(false),
    huawei: new FormControl(false),
    lenova: new FormControl(false),
    samsung: new FormControl(false),
    sony: new FormControl(false),
    microsoft: new FormControl(false),
    laptop: new FormControl(false),
    smartphone: new FormControl(false),
    gamingConsoles: new FormControl(false),
  });

  constructor() { }

  ngOnInit(): void {
  }

  getProducts(): void {
    let request = '?';

    if (this.filterForm.getRawValue().priceLeft || this.filterForm.getRawValue().priceLeft === 0) {
      request += 'price_gte=' + this.filterForm.getRawValue().priceLeft;
    }
    if (this.filterForm.getRawValue().priceRight) {
      request += '&price_lte=' + this.filterForm.getRawValue().priceRight;
    }

    if (this.filterForm.getRawValue().apple) {
      request += '&tags_like=apple';
    }
    if (this.filterForm.getRawValue().huawei === true) {
      request += '&tags_like=huawei';
    }
    if (this.filterForm.getRawValue().lenova) {
      request += '&tags_like=lenova';
    }
    if (this.filterForm.getRawValue().samsung) {
      request += '&tags_like=samsung';
    }
    if (this.filterForm.getRawValue().microsoft) {
      request += '&tags_like=microsoft';
    }
    if (this.filterForm.getRawValue().laptop) {
      request += '&tags_like=laptop';
    }
    if (this.filterForm.getRawValue().smartphone) {
      request += '&tags_like=smartphone';
    }
    if (this.filterForm.getRawValue().gamingConsoles) {
      request += '&tags_like=console';
    }

    console.log(request);
    this.restRequest.emit(request);
  }
}
