import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';
import { MovieDetail } from '../../core/models/interfaces/movie-details';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movie: MovieDetail | null = null;
  movieId:string = '';

  constructor(
    private movieService: MoviesService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { 
    this.movieId = actRoute.snapshot.paramMap.get('id') || ''
  }

  ngOnInit(): void {
    this.getMovie()
  }

  getMovie(){
    this.movieService.getMovieDetails(this.movieId)
    .subscribe({
      next: res => {
        this.movie = res
      },
      error: err => {
        console.log(err)
      }
    });
  }
}
