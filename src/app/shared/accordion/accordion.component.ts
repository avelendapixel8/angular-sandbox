import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Animations } from './../animations/animations';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [Animations.openClose, Animations.rotateDown],
  // encapsulation: ViewEncapsulation.None
})
export class AccordionComponent implements OnInit {

  @Input() title: string;
  @Input() isOpen = false;

  constructor() { }

  public toggleAccordion() {
    this.isOpen = !this.isOpen;
    console.log('accordion open' + this.isOpen );
  }




  ngOnInit() {
  }

}
