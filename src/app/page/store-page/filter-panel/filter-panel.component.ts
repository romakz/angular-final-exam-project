import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {
  @Output() restRequest = new EventEmitter<any>();

  filterForm = new FormGroup({
    priceLeft: new FormControl(0),
    priceRight: new FormControl(900000),
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
    let tagsNames: string[] = [];

    if (this.filterForm.getRawValue().apple) {
      tagsNames.push('apple');
    }

    if (this.filterForm.getRawValue().huawei === true) {
      tagsNames.push('huawei');
    }

    if (this.filterForm.getRawValue().lenova) {
      tagsNames.push('lenova');
    }

    if (this.filterForm.getRawValue().sony) {
      tagsNames.push('sony');
    }

    if (this.filterForm.getRawValue().samsung) {
      tagsNames.push('samsung');
    }

    if (this.filterForm.getRawValue().microsoft) {
      tagsNames.push('microsoft');
    }

    if (this.filterForm.getRawValue().laptop) {
      tagsNames.push('laptop');
    }

    if (this.filterForm.getRawValue().smartphone) {
      tagsNames.push('smartphone');
    }

    if (this.filterForm.getRawValue().gamingConsoles) {
      tagsNames.push('console');
    }

    let request = {
      priceMin: this.filterForm.getRawValue().priceLeft,
      priceMax: this.filterForm.getRawValue().priceRight,
      tags: tagsNames
    };


    this.restRequest.emit(request);
  }
}
