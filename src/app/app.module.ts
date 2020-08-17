import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { BasicComponent } from './lineChart/basic/basic.component';
import { DataLabelComponent } from './lineChart/data-label/data-label.component';
import { TimeSeriesComponent } from './lineChart/time-series/time-series.component';
import { InvertedAxesComponent } from './lineChart/inverted-axes/inverted-axes.component';
import { SymbolComponent } from './lineChart/symbol/symbol.component';
import { PlotBandsComponent } from './lineChart/plot-bands/plot-bands.component';
import { BasicPieChartComponent } from './pieChart/basic-pie-chart/basic-pie-chart.component';
import { PieChartLegendsComponent } from './pieChart/pie-chart-legends/pie-chart-legends.component';
import { DonutChartComponent } from './pieChart/donut-chart/donut-chart.component';
import { StackedBarComponent } from './barChart/stacked-bar/stacked-bar.component';
import { BarChartNegativeComponent } from './barChart/bar-chart-negative/bar-chart-negative.component';
import { BasicBarChartComponent } from './barChart/basic-bar-chart/basic-bar-chart.component';
import { BasicAreaChartComponent } from './areaChart/basic-area-chart/basic-area-chart.component';
import { StackedAreaChartComponent } from './areaChart/stacked-area-chart/stacked-area-chart.component';
import { PercentageComponent } from './areaChart/percentage/percentage.component';
import { InvertedAreaComponent } from './areaChart/inverted-area/inverted-area.component';
import { SplineAreaComponent } from './areaChart/spline-area/spline-area.component';
import { BasicColumnChartComponent } from './columnChart/basic-column-chart/basic-column-chart.component';
import { ColNegComponent } from './columnChart/col-neg/col-neg.component';
import { StackedColumnComponent } from './columnChart/stacked-column/stacked-column.component';
import { GroupedColumnComponent } from './columnChart/grouped-column/grouped-column.component';
import { ColStackPercentComponent } from './columnChart/col-stack-percent/col-stack-percent.component';
import { ColRotateLabelComponent } from './columnChart/col-rotate-label/col-rotate-label.component';
import { ColRangeComponent } from './columnChart/col-range/col-range.component';




@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    DataLabelComponent,
    TimeSeriesComponent,
    InvertedAxesComponent,
    SymbolComponent,
    PlotBandsComponent,
    BasicPieChartComponent,
    PieChartLegendsComponent,
    DonutChartComponent,
    StackedBarComponent,
    BarChartNegativeComponent,
    BasicBarChartComponent,
    BasicAreaChartComponent,
    StackedAreaChartComponent,
    PercentageComponent,
    InvertedAreaComponent,
    SplineAreaComponent,
    BasicColumnChartComponent,
    ColNegComponent,
    StackedColumnComponent,
    GroupedColumnComponent,
    ColStackPercentComponent,
    ColRotateLabelComponent,
    ColRangeComponent, 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


