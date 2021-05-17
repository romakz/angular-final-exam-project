import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {
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

}
