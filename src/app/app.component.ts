import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { BannerComponent } from './core/components/banner/banner.component';
import { MovieService } from './shared/services/movie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
<<<<<<< HEAD
export class AppComponent {
  title = 'netflix-clone';

=======




export class AppComponent implements OnInit{


constructor(private movieService: MovieService){}

ngOnInit(): void {
  this.movieService.getMovies().subscribe(res=>{
    console.log(res);
    
  })
}
>>>>>>> working-branch
}
