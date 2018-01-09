import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  //chart0=[];
  chart1=[];
  chart2=[];
  charts = new Array(2);


  constructor(
    private _weather: WeatherService,
    private _chart: ChartService
  ) {}
  ngOnInit(){
/*
    this._weather.dailyForecast("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys").subscribe((res:any) => {
        let data= res.query.results.channel.item.forecast;
        let temp_max=data.map(res => res.high);
        let temp_min=data.map(res => res.low);
        let weatherDates=data.map(res => res.date);

        this.chart0=this._chart.makeChart(
          'canvas0',
          'Weather',
          [
            {name:'min, Temperature', color:'#0039dd', data:temp_min, id:'y1'},
            {name:'max, Temperature', color:'#dd0031', data:temp_max, id:'y1'},
          ],
          weatherDates,
          'Date',
          [{p:'left', id:'y1', name:'Temperature'}]
        )
      })
*/
      this._weather.dailyForecast("https://kuna.io/api/v2/trades?market=btcuah").subscribe((res:any) => {
          let data:any = res.reverse();
          let price=data.map(res => res.price*1);
          let volume=data.map(res => res.volume*1);
          let uah=data.map(res => res.funds*1);
          let Dates=data.map(res => (new Date(res.created_at)).toLocaleString());

          this.chart2=this._chart.makeChart(
            'canvas0',
            'Kuna BTC/UAH',
            [
              {name:'UAH price', color:'#dd0031', data:price, id:'y1'},
              {name:'UAH volume', color:'#0d5', data:uah, id:'y2'}
            ],
            Dates,
            'Date',
            [
              {p:'left', id:'y1', name:'UAH price'},
              {p:'right', id:'y2', name:'UAH volume'}
            ]
          )

          this.chart2=this._chart.makeChart(
            'canvas1',
            'Kuna BTC/UAH',
            [{name:'BTC volume', color:'#0039dd', data:volume, id:'y1'}],
            Dates,
            'Date',
            [{p:'left', id:'y1', name:'volume'}]
          )
      })

  }

}
