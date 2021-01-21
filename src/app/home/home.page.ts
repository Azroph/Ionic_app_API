import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  movieApiUrl = '';
  movieData = {
    title: '',
    description: '',
    imageUrl: ''
  };

  constructor(public http: HttpClient) {

    this.readAPI('http://www.omdbapi.com/?apikey=f727637c&t=Mr+Robot')
    .subscribe((data) => {
      console.log(data);
      console.log(data['Title']);
      this.movieData.title = data['Title'];
      this.movieData.description = data['Plot'];
      this.movieData.imageUrl = data['Poster'];
    });
  }

    readAPI(URL: string) {
      return this.http.get(URL);
  }

}
