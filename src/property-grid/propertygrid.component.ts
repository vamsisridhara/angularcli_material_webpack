import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { MockServerResultsService } from "service/mock.service";
import { CorporateEmployee } from "service/corporateEmployee";
@Component({
    selector: 'property-grid',
    templateUrl: './propertygrid.component.html',
    styleUrls: ['./propertygrid.component.scss'],
    providers: [
        MockServerResultsService
    ]
})
export class PropertyGridComponent {
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
        req.open('GET', `https://raw.githubusercontent.com/swimlane/ngx-datatable/master/assets/data/company.json`);

        req.onload = () => {
            const start = Math.floor(Math.random() * 91);

            let rows = JSON.parse(req.response);
            rows = rows.slice(start, start + this.pageSize);
            setTimeout(cb, 500, rows);
        };

        req.send();
    }




    // @ViewChild(DatatableComponent) table: DatatableComponent;
    // ngOnInit() { }
    // //rows = [];
    // temp = [];
    // columns = [
    //     { name: 'image' },
    //     { prop: 'name' },
    //     { name: 'Company' },
    //     { name: 'Gender' }
    // ];

    // constructor(private serverResultsService: MockServerResultsService,
    //     private el: ElementRef) {
    //     this.fetch((data) => {
    //         // cache our list
    //         this.temp = [...data];
    //         data.forEach(element => {
    //             element["image"] = '../assets/angular.png';
    //         });
    //         // push our inital complete list
    //         this.rows = data;
    //     });
    // }

    // fetch(cb) {
    //     const req = new XMLHttpRequest();
    //     req.open('GET', `assets/data/company.json`);

    //     req.onload = () => {
    //         cb(JSON.parse(req.response));
    //     };

    //     req.send();
    // }

    // updateFilter(event) {
    //     const val = event.target.value.toLowerCase();

    //     // filter our data
    //     const temp = this.temp.filter(function (d) {
    //         return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    //     });

    //     // update the rows
    //     this.rows = temp;
    //     // Whenever the filter changes, always go back to the first page
    //     this.table.offset = 0;
    // }




    // isLoading: boolean;

    // readonly headerHeight = 50;
    // readonly rowHeight = 50;
    // readonly pageLimit = 10;

    // rows: CorporateEmployee[] = [];
    // onScroll(offsetY: number) {
    //     // total height of all rows in the viewport
    //     const viewHeight = this.el.nativeElement.getBoundingClientRect().height - this.headerHeight;

    //     // check if we scrolled to the end of the viewport
    //     if (!this.isLoading && offsetY + viewHeight >= this.rows.length * this.rowHeight) {

    //         // total number of results to load
    //         let limit = this.pageLimit;

    //         // check if we haven't fetched any results yet
    //         if (this.rows.length === 0) {

    //             // calculate the number of rows that fit within viewport
    //             const pageSize = Math.ceil(viewHeight / this.rowHeight);

    //             // change the limit to pageSize such that we fill the first page entirely
    //             // (otherwise, we won't be able to scroll past it)
    //             limit = Math.max(pageSize, this.pageLimit);
    //         }
    //         this.loadPage(limit);
    //     }
    // }
    // private loadPage(limit: number) {
    //     // set the loading flag, which serves two purposes:
    //     // 1) it prevents the same page from being loaded twice
    //     // 2) it enables display of the loading indicator
    //     this.isLoading = true;

    //     this.serverResultsService.getResults(this.rows.length, limit).subscribe(results => {
    //         this.rows.push(...results.data);
    //         this.isLoading = false;
    //     });
    // }


}