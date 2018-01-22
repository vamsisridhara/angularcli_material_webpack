import { Component, ElementRef, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CorporateEmployee, Page, PagedData } from "service/corporateEmployee";
import { PropertyList } from "viewmodels/PropertyList";
declare let require: any;
const companyData = require('../../src/assets/data/property-list.json');


/**
 * A server used to mock a paged data result from a server
 */
@Injectable()
export class MockServerResultsService {
  // public getResults(offset: number, limit: number): Observable<PagedData<CorporateEmployee>> {
  //   return Observable.of(companydata.slice(offset, offset + limit))
  //     .delay(new Date(Date.now() + 500))
  //     .map(data => ({ data }));
  // }
  /**
  * A method that mocks a paged server response
  * @param page The selected page
  * @returns {any} An observable containing the employee data
  */
  public getResults(page: Page): Observable<PagedData<PropertyList>> {
    return Observable.of(companyData).map(data => this.getPagedData(page));
  }

  /**
   * Package companyData into a PagedData object based on the selected Page
   * @param page The page data used to get the selected data from companyData
   * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
   */
  private getPagedData(page: Page): PagedData<PropertyList> {
    let pagedData = new PagedData<PropertyList>();
    page.totalElements = companyData.length;
    page.totalPages = page.totalElements / page.size;
    let start = page.pageNumber * page.size;
    let end = Math.min((start + page.size), page.totalElements);
    for (let i = start; i < end; i++) {
      let jsonObj = companyData[i] as PropertyList;
      let employee = new PropertyList(jsonObj.id, jsonObj.address, jsonObj.gav, jsonObj.leased,
                    jsonObj.revenue, jsonObj.type, jsonObj.productName, jsonObj.leaseExpired, jsonObj.img);
      pagedData.data.push(employee);
    }
    pagedData.page = page;
    return pagedData;
  }
}
