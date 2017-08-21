import { Component, ViewChild } from '@angular/core';
import { MockServerResultsService } from "service/mock.service";
import { CorporateEmployee, Page } from "service/corporateEmployee";
import { PropertyList } from "viewmodels/PropertyList";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: 'server-paging-demo',
  templateUrl: './external-paging.component.html'
})
export class ServerPagingComponent {

  page = new Page();
  rows = new Array<PropertyList>();
  @ViewChild(DatatableComponent) table: DatatableComponent;
  
  constructor(private serverResultsService: MockServerResultsService) {
    this.page.pageNumber = 0;
    this.page.size = 10;
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
    });
  }

  temp = [];
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}