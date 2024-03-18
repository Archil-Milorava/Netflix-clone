import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  // getMovies() { 
  //   const options = {
  //     params: new HttpParams()
  //       .set('include_adult', 'false')
  //       .set('include_video', 'true')
  //       .set('language', 'en-US')
  //       .set('page', '1')
  //       .set('sort_by', 'popularity.desc'),
  //     headers: new HttpHeaders({
  //       accept: 'application/json',
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTVhZDZjMmM2YmFkNTFlZDlhMDBkYzg2ZTk1MjZlNiIsInN1YiI6IjY1ZjVjYzMxZDRhNjhiMDE0YzI4YzAzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yrueTvbpyppGqt5iCRnt_U1F1elw7qpJzveLlpgIawc',
  //     }),
  //   };

  //   return this.http.get<any>(
  //     'https://api.themoviedb.org/3/discover/movie',
  //     options
  //   );
  // }

  // getMovies() {
  //   return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options)
  // }

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie')
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv')
  }

  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies')
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`);
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing')
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular')
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated')
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming')
  }



}
