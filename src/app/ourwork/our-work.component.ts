import { Component,HostListener, ElementRef ,AfterViewInit, OnInit, Renderer2, Inject} from '@angular/core';
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
  styleUrls: ['./our-work.component.scss'],
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

export class OurWorkComponent implements OnInit, AfterViewInit{

  state = 'hide'

  constructor(public el: ElementRef,private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      }

    }

    cards = [
      {img: '/assets/projects/slide-img1.JPG'},
      {img: '/assets/projects/slide-img2.JPG'},
      {img: '/assets/projects/slide-img3.JPG'},
      {img: '/assets/projects/slide-img4.JPG'},
      {img: '/assets/projects/slide-img5.JPG'},
      {img: '/assets/projects/slide-img6.JPG'},
      {img: '/assets/projects/slide-img7.JPG'},
      {img: '/assets/projects/slide-img8.JPG'},
      {img: '/assets/projects/slide-img9.JPG'},
      {img: '/assets/projects/slide-img10.JPG'},
      {img: '/assets/projects/slide-img11.JPG'},
      {img: '/assets/projects/slide-img12.JPG'},
    ];
    
    slides: any = [[]];
    chunk(arr: any, chunkSize: number) {
      let R = [];
      for (let i = 0, len = arr.length; i < len; i += chunkSize) {
        R.push(arr.slice(i, i + chunkSize));
      }
      return R;
    }
    
    ngOnInit() {
      this.slides = this.chunk(this.cards, 3);
    }
    
    ngAfterViewInit() {
      const buttons = document.querySelectorAll('.btn-floating');
      buttons.forEach((el: any) => {
        this.renderer.removeClass(el, 'btn-floating');
        this.renderer.addClass(el, 'px-3');
        this.renderer.addClass(el.firstElementChild, 'fa-3x');
      });
    }

    
}