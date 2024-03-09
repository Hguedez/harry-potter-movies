import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';
import { MovieDetail } from '../../core/models/interfaces/movie-details';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movie: MovieDetail = {
    id: '',
    title: '',
    release_date: '',
    box_office: '',
    cinematographers: [],
    poster: '',
    producers: [],
    summary: '',
    duration: '',
    budget: ''
  };
  movieId:string = '';

  constructor(
    private movieService: MoviesService,
    private actRoute: ActivatedRoute
  ) { 
    this.movieId = actRoute.snapshot.paramMap.get('id') || ''
  }

  ngOnInit(): void {
    this.getMovie()
  }

  getMovie(): void{
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
