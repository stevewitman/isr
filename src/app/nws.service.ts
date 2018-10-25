import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NwsService {

  asyncResult;

  // private url = 'https://api.weather.gov/gridpoints/RIW/44,143/forecast'

  constructor(private http: HttpClient) { }

  getNws(url) {
    return this.http.get(url).toPromise();
  }

}
