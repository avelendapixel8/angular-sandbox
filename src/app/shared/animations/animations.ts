import { trigger, state, animate, transition, style } from '@angular/animations';

export class Animations{

  public static slideInOut = trigger('slideInOut', [
    state('true', style({ height: '0px', overflow: 'hidden' })),
    state('false', style({ height: '*' })),
    transition('1 => 0', animate('200ms ease-in')),
    transition('0 => 1', animate('200ms ease-out'))
  ]);

  public static openClose = trigger ('openClose', [
    state('open', style({
      height: '*',
    })),
    state('closed', style({
      height: '0px'
    })),
    transition('open => closed', animate('300ms ease')),
    transition('closed => open', animate('300ms ease')),
    transition('* => closed', animate('300ms ease')),
    transition('* => open', animate('300ms ease')),
    transition('open <=> closed', animate('300ms ease')),
    transition('* => open', style({height: '*'})),
    transition('* => *', animate('300ms ease')),

  ]);
  public static rotateDown = trigger('rotateDown', [
    state('up', style({
      transform: 'rotateX(180deg)',
    })),
    state('down', style({
      transform: 'rotateX(0deg)'
    })),
    transition('up => down', animate('50ms ease')),
    transition('down => up', animate('50ms ease')),
  ])

}
