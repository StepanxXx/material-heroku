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
