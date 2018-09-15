import { trigger, state, animate, transition, style, query, group, stagger } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    query('.block', style({ opacity: 0 })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ]),
    query(':enter .stagger', stagger(400, [
      style({ transform: 'translateY(100px)' }),
      animate('1s ease-in-out', style({ transform: 'translateY(0px)', opacity: 1 })),
    ]), { optional: true }),
  ]),

  //  // Next Page
  //  transition('* => next', [
  //   // Initial state of new route
  //   query(':enter, :leave', style({ position: 'fixed', width: '100%', })),
  //   // Hortizontal right to left page load
  //   group([
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)', opacity: '0' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: '1' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)', opacity: '1' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)', opacity: '0' }))
  //     ], { optional: true }),
  //   ]),
  // ]),

  // Subsequent pages back to listing page

  // transition('next => *', [
  //     // Initial state of new route
  //   query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
  //   // {optional:true}),
  //   // Hortizontal left to right page load
  //   group([
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)', opacity: '0' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: '1' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)', opacity: '1' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)', opacity: '0' }))
  //     ], { optional: true }),
  //   ]),
  // ]),

  // // Next Page
  // transition('void => next', [
  //   // Initial state of new route
  //   query(':enter, :leave', style({ position: 'fixed', width: '100%', })),
  //   // Hortizontal animations right to left page load
  //   group([
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)', opacity: '0' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: '1' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)', opacity: '1' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)', opacity: '0' }))
  //     ], { optional: true }),
  //   ]),
  // ]),

  // // Next Page to Checkout
  // transition('next => checkout', [
  //   // Initial state of new route
  //   query(':enter, :leave', style({ position: 'fixed', width: '100%', })),
  //   // Hortizontal animations right to left page load
  //   group([
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)', opacity: '0' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: '1' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)', opacity: '1' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)', opacity: '0' }))
  //     ], { optional: true }),
  //   ]),
  // ]),
]);
