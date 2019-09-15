import { Animations } from './../animations/animations';
import { Component, Input, ElementRef, OnChanges, ViewEncapsulation } from '@angular/core';
import { trigger, stagger, state, style, animate, transition, group } from '@angular/animations';
@Component({
  selector: 'read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
  animations: [
      trigger('openClose', [
          state ('in', style({
              opacity: .5,
            }
          )),
        //   state('out', style({
        //       opacity: 1,

        //   })),
          transition('in => out', [
              animate('250ms ease-in-out', style({opacity: 1}))
          ]),
          transition('out => in', [
              animate('250ms ease-in-out', style({opacity: .5}))
          ])
      ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class ReadMoreComponent implements OnChanges {
  @Input() text: string;
  @Input() maxLength = 100;
  @Input() maxHeight = 50;
  currentText: string;
  hideToggle = true;
  toggleState: string;

  public isCollapsed = true;

  constructor(private elementRef: ElementRef) {

  }
  toggleView() {
      this.isCollapsed = !this.isCollapsed;
      if (this.isCollapsed) {
          this.toggleState = 'in';
      } else {
        this.toggleState = 'out';
      }
      this.determineView();
      console.log ('toggleState: ' + this.toggleState);

  }
  determineView() {
      if (this.text.length <= this.maxLength) {
          this.currentText = this.text;
          this.isCollapsed = false;
          this.hideToggle = true;
          return;
      }
      this.hideToggle = false;
      if (this.isCollapsed === true) {
          this.currentText = this.text.substring(0, this.maxLength) + '...';
      } else if (this.isCollapsed === false)  {
          this.currentText = this.text;
      }

  }
  ngOnChanges() {
      this.determineView();
  }

}

