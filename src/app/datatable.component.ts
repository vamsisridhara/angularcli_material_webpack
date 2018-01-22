import { Component, ElementRef, OnInit } from '@angular/core';
declare let $ : any;
@Component({
    selector:'dt',
    template:`
        <div class="container">
            <table class="table table-responsive" id="example">
            </table>
        </div>
    
    `

})
export class DataTableComponent implements OnInit {
    rootnode: ElementRef;
    constructor(private _rootNode: ElementRef){
        this.rootnode = _rootNode;
    }
    ngOnInit() {

        var el = $(this.rootnode.nativeElement).find('#example')[0];
        let persons = [{
            "ID": "1",
            "FirstName": "vamsi",
            "LastName": "sridhara"
        }, {
            "ID": "1",
            "FirstName": "vamsi",
            "LastName": "sridhara"
        }, {
            "ID": "1",
            "FirstName": "vamsi",
            "LastName": "sridhara"
        }, {
            "ID": "1",
            "FirstName": "vamsi",
            "LastName": "sridhara"
        }]
        $('#example').DataTable({
            destroy: true,
            data: persons,
            order: [0, 'asc'],
            serverSide: false,
            columns: [
                {
                    data: "ID"
                }, {
                    data: "FirstName"
                }, {
                    data: "LastName"
                }]
        });


    }

}