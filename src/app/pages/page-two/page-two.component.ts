import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IMAGEGALLERY } from './mock-gallery';

@Component({
  selector: 'page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageTwoComponent implements OnInit {

  galleryImages = IMAGEGALLERY;

  constructor() { }

  ngOnInit() {
  }

}
