import { Component, OnInit, Input } from '@angular/core';
import { ChartsModule, Color } from 'ng2-charts';
@Component({
    selector: 'dough-nut',
    templateUrl: './doughnut.component.html'
})
export class DoughnutComponent implements OnInit {
    @Input() inputLabels;
    @Input() inputData;

    type: string = 'doughnut';

    colorsUndefined: Array<Color>;
    colorsEmpty: Array<Color> = [];
    colorsOverride: Array<Color> = [{
        backgroundColor: 'green',
        hoverBackgroundColor: 'purple'
    }];
    colorsEmptyObject: Array<Color> = [{}];

    datasets: any[] = [];
    constructor() {
    }
    ngOnInit() {
        this.datasets = [
            {
                data: this.inputData,
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#000",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }];
    }
}