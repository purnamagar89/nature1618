import { Component,HostListener, ElementRef , Inject, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { IImage } from 'ng-simple-slideshow';

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

export class OurWorkComponent {

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

    imageUrls: IImage[] = [
      { url: '/assets/projects/project1/1.JPG'},
      { url: '/assets/projects/project1/2.JPG'},
      { url: '/assets/projects/project1/3.JPG'},
      { url: '/assets/projects/project1/4.JPG'},
      { url: '/assets/projects/project1/5.JPG'},
      { url: '/assets/projects/project1/6.JPG'},
      { url: '/assets/projects/project1/7.JPG'},
      { url: '/assets/projects/project1/8.JPG'},
      { url: '/assets/projects/project1/9.JPG'},
      { url: '/assets/projects/project1/10.JPG'},
      { url: '/assets/projects/project1/11.JPG'},
      { url: '/assets/projects/project1/12.JPG'}    
    ];

    
    
}
