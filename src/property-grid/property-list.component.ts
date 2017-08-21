import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { PropertyList } from "viewmodels/PropertyList";
@Component({
    selector: 'property-list',
    templateUrl: './property-list.component.html',
    styleUrls: ['./property-list.component.scss'],
    providers: [

    ]
})
export class PropertyListComponent {
    //https://plnkr.co/edit/3UVBTiDGZzRcwZ9dsyIg?p=preview
    pageSize = 10;
    loadingIndicator: boolean;
    rows: any[] = [];
    maxOffset: number = -1;

    constructor() {
        this.page(0);
    }

    onPage(event) {
        if (event.offset === this.maxOffset) {
            console.log('Page event', event);
            this.page(event.offset + 1);
        }
    }

    page(newMaxOffset: number) {
        // ensure idempotency
        if (this.maxOffset < newMaxOffset) {
            this.maxOffset++;
            this.loadingIndicator = true;
            this.fetch((results) => {
                this.rows = this.rows.concat(results);
                this.loadingIndicator = false;
                console.log(`New page ${this.rows.length / this.pageSize}, rows: ${this.rows.length}`);
            });
        }
    }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/property-list.json`);
        req.onload = () => {
            const start = Math.floor(Math.random() * 91);

            let rows = JSON.parse(req.response);
            rows.forEach(x => {
                x["img"] = '../assets/angular.png';
            });
            rows = rows.slice(start, start + this.pageSize);
            setTimeout(cb, 500, rows);
        };

        req.send();
    }




}