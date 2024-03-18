import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { BannerComponent } from './core/components/banner/banner.component';
import { MovieService } from './shared/services/movie.service';
import { MovieCarouselComponent } from './shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from './shared/models/video-content.interface';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent, MovieCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




export class AppComponent implements OnInit{


movies: IVideoContent[] = [];
tvShows: IVideoContent[] = [];
ratedMovies: IVideoContent[] = [];
nowPlayingMovies: IVideoContent[] = [];
popularMovies: IVideoContent[] =[];
topRatedMovies: IVideoContent[] = [];
upcomingMovies: IVideoContent[] = [];




constructor(private movieService: MovieService){}


sources =[
  this.movieService.getTvShows(),
  this.movieService.getRatedMovies(),
  this.movieService.getNowPlayingMovies(),
  this.movieService.getUpcomingMovies(),
  this.movieService.getPopularMovies(),
  this.movieService.getTopRated()
]

ngOnInit(): void {
  // this.movieService.getMovies().subscribe(res=>{
  //   this.popularMovies = res.results
  // })


  forkJoin(this.sources).pipe(
    map(([tvShows, ratedMovies, nowPlaying, upComing, popular, topRated])=>{
return {tvShows, ratedMovies, nowPlaying, upComing, popular, topRated}
    })
  ).subscribe((res:any)=>{
    this.movies = res.movies.results as IVideoContent[];
    this.tvShows = res.tvShows.results as IVideoContent[];
    this.ratedMovies = res.ratedMovies.results as IVideoContent[];
    this.nowPlayingMovies = res.nowPlaying.results as IVideoContent[];
    this.upcomingMovies = res.upcoming.results as IVideoContent[];
    this.popularMovies = res.popular.results as IVideoContent[];
    this.topRatedMovies = res.topRated.results as IVideoContent[];

  })
}



}
