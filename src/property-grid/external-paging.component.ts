import { Component, ViewChild } from '@angular/core';
import { MockServerResultsService } from "service/mock.service";
import { CorporateEmployee, Page } from "service/corporateEmployee";
import { PropertyList } from "viewmodels/PropertyList";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
  selector: 'server-paging-demo',
  templateUrl: './external-paging.component.html'
})
export class ServerPagingComponent {

  page = new Page();
  rows = new Array<PropertyList>();
  columns = [];
  temp = new Array<PropertyList>();
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private serverResultsService: MockServerResultsService) {
    this.page.pageNumber = 0;
    this.page.size = 10;
    this.columns = [{ name: 'IMG' }, { name: 'ADDRESS' }, { name: 'GAV' }, { name: 'LEASED' },
    { name: 'REVENUE' }, { name: 'TYPE' }, { name: 'PRODUCT NAME' }, { name: 'LEASE EXPIRED' }];
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.serverResultsService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
      // cache our list
      this.temp = [...this.rows];
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.address.toLowerCase().indexOf(val) !== -1 ||
        d.gav.toLocaleLowerCase().indexOf(val) !== -1 ||
        d.leased.toLocaleLowerCase().indexOf(val) !== -1 ||
        d.leaseExpired.toLocaleLowerCase().indexOf(val) !== -1 ||
        d.productName.toLocaleLowerCase().indexOf(val) !== -1 ||
        d.revenue.toLocaleLowerCase().indexOf(val) !== -1 ||
        d.type.toLocaleLowerCase().indexOf(val) !== -1 ||
        !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}