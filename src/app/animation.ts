
import {animate, state, style, transition, trigger} from "@angular/animations";

export const showTrigger = trigger('showTrigger',[

transition(':enter', [
  style({
    opacity: 0
  }),
  animate(300)
]),
  transition(':leave',
  animate(0,
  style({
    opacity: 0
  })))
]);

export const slideTrigger  = trigger('slideTrigger',[

  transition('out <=> in',[
    style({
      transform: 'translateY(-100)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(0)'
    })),
  ])

]);
