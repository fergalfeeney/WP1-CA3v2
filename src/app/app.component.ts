import { Component } from '@angular/core';
import { IOMDBResponse } from './ombdresponse';
import { OmbdApiService } from './services/ombd-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  
  
 
