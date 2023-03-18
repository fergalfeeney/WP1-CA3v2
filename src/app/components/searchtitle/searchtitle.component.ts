import { Component } from '@angular/core';
import { OmbdApiService } from 'src/app/services/ombd-api.service';
import { IOMDBResponse } from 'src/app/ombdresponse';

@Component({
  selector: 'app-searchtitle',
  templateUrl: './searchtitle.component.html',
  styleUrls: ['./searchtitle.component.css']
})
export class SearchtitleComponent {
  title = 'Movie Finder';
  movieData:IOMDBResponse | undefined;
  errorMessage:any;



  constructor(private _omdbService:OmbdApiService) { }
  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log("Director Name : " + this.movieData.Director);

      }
    )
  return false;
}
}
