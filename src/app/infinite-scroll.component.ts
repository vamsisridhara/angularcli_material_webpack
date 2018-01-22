import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { flatMap } from "lodash";
//http://blog.brecht.io/infinite-scroll-with-rxjs-and-angular2/
@Component({
    selector: 'infinite-scroll-list',
    template: `
  <table class="table table-hover table-striped">
   <tbody>
    <tr *ngFor="let item of itemResults$|async" [style.height]="itemHeight + 'px'">
      <td>{{item?.name}}</td>
    </tr>
   </tbody>
   </table>
   <span *ngIf="loading">Loading more items...</span>
  `
})
export class InfiniteScrollListComponent {
    private cache = [];
    private pageByManual$ = new BehaviorSubject(1);
    private itemHeight = 40;
    private numberOfItems = 10;
    // ---2----3---4---...
    private pageByScroll$ = Observable.fromEvent(window, "scroll")
        .map(() => window.scrollY)
        .filter(current => current >= document.body.clientHeight - window.innerHeight)
        .debounceTime(200)
        .distinct()
        .map(y => Math.ceil((y + window.innerHeight) / (this.itemHeight * this.numberOfItems)));

    private pageByResize$ = Observable
        .fromEvent(window, "resize")
        .debounceTime(200)
        .map(_ => Math.ceil((window.innerHeight + document.body.scrollTop) / (this.itemHeight * this.numberOfItems)));

    private pageToLoad$ = Observable
        .merge(this.pageByManual$, this.pageByScroll$, this.pageByResize$)
        .distinct()
        .filter(page => this.cache[page - 1] === undefined)

    loading = false;
    itemResults$ = this.pageToLoad$
        .do(_ => this.loading = true)
        .flatMap((page: number) => {
            return this.http.get(`https://swapi.co/api/people?page=${page}`)
                .map(resp => resp.json().results)
                .do(resp => {
                    this.cache[page - 1] = resp;
                    this.loading = false;

                    if ((this.itemHeight * this.numberOfItems * page) < window.innerHeight) {
                        this.pageByManual$.next(page + 1);
                    }
                })
        })
        .map(_ => flatMap(this.cache));

    constructor(private http: Http) {

    }
}
