import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MoviesComponent } from './movies/movies.component'
import { MoviesService } from '../core/services/movies.service'
import { CoreModule } from '../core/core.module'
import { DurationPipe } from '../core/utils/pipes/duration.pipe'
import { SharedModule } from '../shared/shared.module'
import { MovieDetailsComponent } from './movie-details/movie-details.component'
import { BudgetPipe } from '../core/utils/pipes/budget.pipe'

@NgModule({
  declarations: [
    MoviesComponent,
    DurationPipe,
    MovieDetailsComponent,
    BudgetPipe
  ],
  providers: [MoviesService],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class PagesModule { }
