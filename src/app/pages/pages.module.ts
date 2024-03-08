import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MoviesComponent } from './movies/movies.component'
import { MoviesService } from '../core/services/movies.service'
import { CoreModule } from '../core/core.module'
import { DurationPipe } from '../core/utils/pipes/duration.pipe'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    MoviesComponent,
    DurationPipe
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
