import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../core/services/movies.service';
import { Movie } from '../core/models/interfaces/movie';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movies: Observable<Movie[]> = of([]);

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(): void{
    this.movieService.getMovies()
    .subscribe(
      response => {
        console.log(response)
        // this.movies = response;
      }
    );
  }

}
