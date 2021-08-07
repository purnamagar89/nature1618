import { Component,HostListener, ElementRef , Inject} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
 selector: 'get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss'],
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

export class GetInvolvedComponent{

  state = 'hide'

  constructor( public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      }

    }
    
}
