import { Component, OnInit } from '@angular/core';
import { TemperatureMonitor } from "app/temperatureMonitor.service";
@Component({
    selector: 'temp-monitor',
    templateUrl: './temperatureMonitor.component.html'
})
export class TemperatureMonitorComponent {
    medianTemperatures: number;
    temperature: number;
    temperatures: number[];
    errors: any[];
    constructor(private tempMonitor: TemperatureMonitor) {
        this.errors = [];
        this.temperatures = [];
        let regexPattern = new RegExp('^-?[0-9]\d*(\.\d+)?$');
        console.log(regexPattern.test('-4'));

    }
    addTemperature() {
        this.errors = [];
        let regexPattern = new RegExp('^-?[0-9]\d*(\.\d+)?$');
        if (!regexPattern.test(this.temperature.toLocaleString())) {
            this.errors.push({ error: 'Strings are not allowed.' });
            return;
        }
        if (this.tempMonitor.temperatures.length <= 7) {
            this.tempMonitor.recordTemperature(+this.temperature);
            this.temperatures = this.tempMonitor.temperatures;
        } else {
            this.errors.push({ error: 'Maximum of 8 temperatures are allowed.' });
        }
    }
    getMedian() {
        this.medianTemperatures = this.tempMonitor.median(this.temperatures);
    }

}