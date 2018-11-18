import { Component, OnInit, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { IMAGEGALLERY } from './mock-gallery';

@Component({
  selector: 'page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageTwoComponent implements OnInit, AfterViewChecked {

  title = "Masonry Gallery"

  galleryImages = IMAGEGALLERY;

  constructor() { }

  resizeGridItem(item) {
    var grid = document.getElementsByClassName("masonry-grid")[0];
    var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    var rowSpan = Math.ceil((item.querySelector('.masonry-card').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span "+ rowSpan;
    console.log(grid)
  }

  ngAfterViewChecked() {
    this.resizeAllGridItems();
  }

  onResize(event) {
    this.resizeAllGridItems();
  }

  resizeAllGridItems() {
    var allItems = document.getElementsByClassName("masonry-grid__item");
    for (var x = 0; x < allItems.length; x++) {
      this.resizeGridItem(allItems[x]);
    }
  }
  ngOnInit() {
  }

}
