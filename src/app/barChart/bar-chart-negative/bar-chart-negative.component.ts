import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-chart-negative',
  templateUrl: './bar-chart-negative.component.html',
  styleUrls: ['./bar-chart-negative.component.scss']
})
export class BarChartNegativeComponent implements OnInit {

  highcharts = Highcharts;
  chartOptions = {   
     chart: {
        type: 'bar'
     },
     title: {
        text: 'Bar chart with negative values'
     },
     xAxis:{
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']        
     },     
     series: [
        {
           name: 'John',
           data: [5, 3, 4, 7, 2]
        }, 
        {
           name: 'Jane',
           data: [2, -2, -3, 2, 1]
        }, 
        {
           name: 'Joe',
           data: [3, 4, 4, -2, 5]
        }
     ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
