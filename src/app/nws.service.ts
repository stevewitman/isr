import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NwsService {

  private url = 'https://api.weather.gov/gridpoints/RIW/44,143/forecast'

  constructor(private http: HttpClient) { }

  getNws(): Observable {
    return this.http.get(this.url);
  }

}
