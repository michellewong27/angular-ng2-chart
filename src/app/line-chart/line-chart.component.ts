import { Component, } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {

  //({ data: SingleDataSet, label: string }[]) – data see about, the label for the dataset which appears in the legend and tooltips
  lineChartData: ChartDataSets[] = [
    //set of points on chart
    { data: [73, 70, 78, 76, 77, 82], label: 'Temperature' },
  ];

  //x axis labels
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  //chart options
  lineChartOptions = {
    responsive: true,
  };

  //data colors
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    }
  ];

  // if true show legend below the chart, otherwise not be shown
  lineChartLegend = true;

  lineChartPlugins = [];

  //indicates the type of chart
  lineChartType: ChartType = 'line';
  
}