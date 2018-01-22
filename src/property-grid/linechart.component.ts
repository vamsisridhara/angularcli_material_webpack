import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'line-chart',
    templateUrl: './linechart.component.html'
})
export class LinechartComponent {
    constructor() { }
    // lineChart
    // public lineChartData: Array<any> = [
    //    { label: 'Actual', data: [65, 59, 80, 81, 56]},
    //    { label: 'Budget', data: [28, 48, 40, 19, 86] }   
    // ];
    public lineChartData: Array<any> = [
        [65, 59, 80, 81, 56],
        [28, 48, 40, 19, 86]
    ];
    public lineChartLabels: Array<any> = ['Nov 2016', 'Dec 2016', 'Jan 2017', 'Feb 2017', 'Mar 2017'];
    public lineChartType: string = 'line';
    lineChartLegend: string = '';
}