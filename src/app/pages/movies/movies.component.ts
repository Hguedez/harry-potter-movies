import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../core/models/interfaces/movie';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  filtersForm: FormGroup = this.formBuilder.group({
    Title: [''],
    Release_Year: [''],
  });;
  constructor(
    private movieService: MoviesService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { 
    
  }

  ngOnInit(): void {
    if (navigator.serviceWorker.controller) {
      // Service worker is ready and controlling the page.
      this.getMovies();
    } else {
      // Service worker is not ready, wait for it to be ready.
      navigator.serviceWorker.ready.then(registration => {
        // Now the service worker is ready.
        this.getMovies();
      });
    }
  }

  getMovies(){
    this.movieService.getMovies()
    .subscribe({
      next: res => {
        this.movies = res
        this.filteredMovies = this.movies;
      },
      error: err => {
        console.log(err)
      }
    });
  }

  goToMovieDetails(movieId:string){
    this.router.navigate(['pages/details', movieId]);
  }

  searchMovie(event:any){
    console.log(event)
  }

  filterMovies() {
    const title = this.filtersForm.get('Title')?.value;
    const releaseYear = this.filtersForm.get('Release_Year')?.value;
  
    this.filteredMovies = this.movies.filter(movie => {
      return (!title || movie.title.includes(title)) &&
             (!releaseYear || movie.release_date.includes(releaseYear));
    });
  }

}
