import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
