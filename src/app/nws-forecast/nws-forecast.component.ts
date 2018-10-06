import { Component, OnInit } from '@angular/core';
import { NwsService } from '../nws.service';

@Component({
  selector: 'app-nws-forecast',
  templateUrl: './nws-forecast.component.html',
  styleUrls: ['./nws-forecast.component.css']
})
export class NwsForecastComponent implements OnInit {

  public nwsForecast = {};

  constructor(private nwsService: NwsService) { }
  ngOnInit() {
    this.nwsService.getNws().subscribe(data => this.nwsForecast = data);
  }

}
