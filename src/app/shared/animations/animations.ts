import { trigger, state, animate, transition, style } from '@angular/animations';

export class Animations{

  public static slideInOut = trigger('slideInOut', [
    state('true', style({ height: '0px', overflow: 'hidden' })),
    state('false', style({ height: '*' })),
    transition('1 => 0', animate('200ms ease-in')),
    transition('0 => 1', animate('200ms ease-out'))
  ]);

}
