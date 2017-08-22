import { Component, OnInit, Input,Output } from '@angular/core';
import { ChartViewModel } from "viewmodels/chartVM";
@Component({
    selector: 'chart-gi',
    templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
    //http://valor-software.com/ng2-charts/
    @Input() inputchartVM: ChartViewModel;
    constructor() {

    }
    ngOnInit() {
  

    }
}
