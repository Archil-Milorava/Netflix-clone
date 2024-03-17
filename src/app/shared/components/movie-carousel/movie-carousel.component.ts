import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild, viewChild } from '@angular/core';
import Swiper from 'swiper';
import { IVideoContent } from '../../models/video-content.interface';

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.css'
})
export class MovieCarouselComponent implements AfterViewInit {

  @Input() videoContent: IVideoContent[] = [];
  @Input() title!: string;

@ViewChild('swiperContainer') swiperContainer!: ElementRef

ngAfterViewInit(): void {
  this.initSwiper()
}


private initSwiper(){
  return new Swiper(this.swiperContainer.nativeElement, {
    direction: 'horizontal',
    slidesPerView: 2,
    slidesPerGroup: 2,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
        centeredSlides: true
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 5,
        centeredSlides: true
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        centeredSlides: false
      },
      1500: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 5,
        centeredSlides: false
      },
      1800: {
        slidesPerView: 5,
        slidesPerGroup: 6,
        spaceBetween: 5,
        centeredSlides: false
      },
    }
  })
}

}
