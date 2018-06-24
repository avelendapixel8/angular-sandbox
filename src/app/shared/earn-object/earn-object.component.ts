import { Input, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'earn-object',
  templateUrl: './earn-object.component.html',
  styleUrls: ['./earn-object.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EarnObjectComponent implements OnInit {

  @Input() isStacked : boolean ;
  @Input() hasEarn : boolean ;

  constructor() { }

  ngOnInit() {
  }

}
