import { Component, OnInit, ViewEncapsulation, Input, Directive, Inject, ElementRef, Renderer2 } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';

// @Directive ({
//   selector: '[rating]'
// })

@Component({
  selector: 'star-rating',
  template: ` 
    <span [ngClass]="{
      'one' : rating === 'one',
      'onehalf' : rating === 'onehalf',
      'two' : rating === 'two',
      'twohalf' : rating === 'twohalf',
      'three' : rating === 'three',
      'threehalf' : rating === 'threehalf',
      'four' : rating === 'four',
      'fourhalf' : rating === 'fourhalf',
      'five' : rating === 'five'
      }" class="ratings four"></span>
  `,
  styleUrls: ['./star-rating.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StarRatingComponent implements OnInit {
  @Input() private rating: string = 'one';
 
  constructor() { }

  ngOnInit() {
  }

}
