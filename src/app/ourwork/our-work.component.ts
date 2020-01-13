import { Component,HostListener, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
 selector: 'our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
      })),
      state('hide',   style({
        opacity: 0,
        transform:"translateY(100%)"
      })),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})

export class OurWorkComponent{

  state = 'hide'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      }

    }

    
}
