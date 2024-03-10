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
    this.getMovies();
  }

  /**
   * Get the list of all Harry Potter movies
   */
  getMovies(): void {
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

  /**
   * Navigates to the movie details page for a given movie.
   * @param movieId The ID of the movie.
   */
  goToMovieDetails(movieId:string): void{
    this.router.navigate(['pages/details', movieId]);
  }

  /**
   * Filters 'movies' based on form input.
   * Keeps movies with matching title and release year.
   * Updates 'filteredMovies' with the results.
   */
  filterMovies(): void {
    const title = this.filtersForm.get('Title')?.value.toLowerCase();
    const releaseYear = this.filtersForm.get('Release_Year')?.value;
  
    this.filteredMovies = this.movies.filter(movie => {
      let year = movie.release_date;
      if(movie.release_date.includes('-')){
        [year] = movie.release_date.split('-');
      }
      return (!title || movie.title.toLowerCase().includes(title)) &&
            (!releaseYear || year.includes(releaseYear));
    });
  }

}
