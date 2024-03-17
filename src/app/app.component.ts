import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { BannerComponent } from './core/components/banner/banner.component';
import { MovieService } from './shared/services/movie.service';
import { MovieCarouselComponent } from './shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from './shared/models/video-content.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent, MovieCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




export class AppComponent implements OnInit{


  popularMovies: IVideoContent[] = []


constructor(private movieService: MovieService){}

ngOnInit(): void {
  this.movieService.getMovies().subscribe(res=>{
    console.log(res);
    
    this.popularMovies = res.results
  })
}
}
