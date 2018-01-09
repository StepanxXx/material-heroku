import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';

@Injectable()
export class ChartService {
  constructor() { }
  makeChart(id,name,lines,labels,x,y){
    let datasets=[];
    lines.forEach(function(elem) {
      datasets.push({
        label:elem.name, fill:false, backgroundColor:elem.color,
        borderColor:elem.color, data:elem.data, yAxisID:elem.id
      })
    });
    let yAxes=[];
    y.forEach(function(elem, i) {
      yAxes.push({
          type: "linear",
          display: true,
          position: elem.p,
          id: elem.id,
          scaleLabel: {
            display: true,
            labelString: elem.name
          },
          gridLines: {
              drawOnChartArea: i==0 ? true : false
          }
      })
    });
    return new Chart(id,{
      type: 'line',
      data: {
        labels:labels,
        datasets: datasets
      },
      options: {
        responsive: true,
        title:{
          display: true,
          text:name
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: x
            }
          }],
            yAxes: yAxes
        }
      }
    })
  }
}
