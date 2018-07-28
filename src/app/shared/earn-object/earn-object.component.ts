import { Renderer2, Input, Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'earn-object',
  templateUrl: './earn-object.component.html',
  styleUrls: ['./earn-object.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EarnObjectComponent implements OnInit {

  @Input() isStacked : boolean ;
  @Input() hasEarn : boolean ;

  @Input() earnFontSize : number;
  @Input() earnTitle : string = 'Earn';
  @Input() earnValue : string = '38';
  @Input() purchaseType : string = 'Cruise Points™';
  @Input() perStayLabel : string = 'avg/night';

  @HostBinding('class') public cssClass = 'class1'

  constructor(private renederer: Renderer2) { 
    this.renederer.addClass(document.body, 'hasHero');
  }

  ngOnInit() {

  }
  ngOnDestroy(): void {
    this.renederer.removeClass(document.body, 'hasHero');

    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

}
