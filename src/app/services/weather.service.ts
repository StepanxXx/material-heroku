import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http:  HttpClient) { }

  dailyForecast(url:string){
    return this
    ._http.get(url)
      .map(result=>result)
  }

}
