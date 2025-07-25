import {Component, OnInit,} from '@angular/core';
import {NgStyle} from '@angular/common';
import {StarRatingComponent} from '../../components/star-rating/star-rating.component';
import {MovieService} from '../../services/movie.service';
import {TranslatePipe} from '@ngx-translate/core';

declare const UIkit: any;


@Component({
  selector: 'app-movie-list',
  imports: [
    NgStyle,
    StarRatingComponent,
    TranslatePipe
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})

export class MovieListComponent implements OnInit{
  movies: any[] = [];

  constructor(private movieService : MovieService) {
  }

  ngOnInit(){
    UIkit.modal('#modal-loading').show();

    this.movieService.getMovies().subscribe({
      next: (json) =>{
        this.movies=json.data;
        UIkit.modal('#modal-loading').hide();
      },
      error: (err) => {
        console.log(err);
        UIkit.modal('#modal-loading').hide();
      }
    })
  }
}
