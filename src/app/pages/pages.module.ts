import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MoviesComponent } from './movies/movies.component'
import { MoviesService } from './core/services/movies.service'
import { CoreModule } from './core/core.module'

@NgModule({
  declarations: [
    MoviesComponent
  ],
  providers: [MoviesService],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule
  ]
})
export class PagesModule { }
