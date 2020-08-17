import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-basic-area-chart',
  templateUrl: './basic-area-chart.component.html',
  styleUrls: ['./basic-area-chart.component.scss']
})
export class BasicAreaChartComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {   
     chart: {
        type: 'area'
     },
     title: {
        text: 'Average fruit consumption during one week'
     },
     subtitle : {
        style: {
           position: 'absolute',
           right: '0px',
           bottom: '10px'
        }
     },
     legend : {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: -150,
        y: 100,
        floating: true,
        borderWidth: 1,
        // backgroundColor: (
        //    Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
     },
     xAxis:{
        categories: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] 
     },
     yAxis : {
        title: {
           text: 'Number of units'
        },
        labels: {
           formatter: function () {
              return this.value;
           }
        },
        min:0
     },
     tooltip : {
        formatter: function () {
           return '<b>' + this.series.name + '</b><br/>' +
              this.x + ': ' + this.y;
        }
     },
     plotOptions : {
        area: {
           fillOpacity: 0.5 
        }
     },
     credits:{
        enabled: false
     },
     series: [
        {
           name: 'John',
           data: [3, 4, 3, 5, 4, 10, 12]
        }, 
        {
           name: 'Jane',
           data: [1, 3, 4, 3, 3, 5, 4]
        }
     ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
