import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/interfaces/movie';
import { MovieDetail } from '../models/interfaces/movie-details';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/movies')
  }

  getMovieDetails(movieId: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`/movies/${movieId}`);
  }
}
