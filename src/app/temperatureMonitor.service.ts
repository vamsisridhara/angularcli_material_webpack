import { Injectable } from '@angular/core';
@Injectable()
export class TemperatureMonitor {
    temperatures: number[];
    constructor() {
        this.temperatures = [];
    }
    median(values: number[]): any {
        values.sort(function (a, b) {
            return a - b;
        });
        var half = Math.floor(values.length / 2);
        if (values.length % 2)
            return values[half];
        else
            return (values[half - 1] + values[half]) / 2.0;
    }
    recordTemperature(temp: number) {
        this.temperatures.push(temp);
    }

}