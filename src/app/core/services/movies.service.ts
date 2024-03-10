import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/interfaces/movie';
import { MovieDetail } from '../models/interfaces/movie-details';
import { delay, retryWhen, tap, retry  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  /**
   * Fetches all movies from '/movies'. Retries thrice on failure.
   * @returns An Observable of Movie[].
   */
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/movies').pipe(
      retryWhen(errors =>
        errors.pipe(
          delay(1000), // wait 1 second before retrying
          retry(3),
          tap(() => console.log('Retrying...'))
        )
      )
    )
  }

  /**
   * Fetches the details of a movie by ID. Retries thrice on failure.
   * @returns MovieDetail Observable.
   */
  getMovieDetails(movieId: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`/movies/${movieId}`).pipe(
      retryWhen(errors =>
        errors.pipe(
          delay(1000), // wait 1 second before retrying
          retry(3),
          tap(() => console.log('Retrying...'))
        )
      )
    )
  }
}
