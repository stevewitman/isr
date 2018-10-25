import { Component, OnInit, Input } from '@angular/core';
import { NwsService } from '../nws.service';

@Component({
  selector: 'app-nws-forecast',
  templateUrl: './nws-forecast.component.html',
  styleUrls: ['./nws-forecast.component.css']
})
export class NwsForecastComponent implements OnInit {
  @Input() nwsUrl;

  period_data: any;

  nwsData;

  constructor(private nwsService: NwsService) { }

  ngOnInit() {
    this.getNwsData(this.nwsUrl);
  }

  async getNwsData(url) {
    this.nwsData = await this.nwsService.getNws(url);
    const property = this.nwsData.properties;
    const period_data = property.periods;
    this.period_data = period_data;
    console.log(period_data);
  }

  getSnow() {}

}
