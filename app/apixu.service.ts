import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location){
    return this.http.get('http://api.weatherstack.com/current?access_key=f56afa806667c9f5262fd057501257f4&query=' + 'california');
  }
}
