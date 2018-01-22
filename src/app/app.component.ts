import { Component, OnInit } from '@angular/core';
import { ChartViewModel } from 'viewmodels/chartVM';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list = [1, 2, 3, 4, 5];
  title = 'app works!';

  labels: string[] = ['90+ Days', '61-90 Days', '31-60 days', '1-30 Do'];
  data: number[] = [350, 450, 100, 50];


  rows = [
    {
      name: 'Austin',
      gender: 'Male',
      company: 'Swimlane',
      image: 'https://angularjs.org/img/AngularJS-large.png'
    },
    { name: 'Dany', gender: 'Male', company: 'KFC', image: 'https://angularjs.org/img/AngularJS-large.png' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', image: 'https://angularjs.org/img/AngularJS-large.png' },
    {
      name: 'Austin',
      gender: 'Male',
      company: 'Swimlane',
      image: 'https://angularjs.org/img/AngularJS-large.png'
    },
    { name: 'Dany', gender: 'Male', company: 'KFC', image: 'https://angularjs.org/img/AngularJS-large.png' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', image: 'https://angularjs.org/img/AngularJS-large.png' },
    {
      name: 'Austin',
      gender: 'Male',
      company: 'Swimlane',
      image: 'https://angularjs.org/img/AngularJS-large.png'
    },
    { name: 'Dany', gender: 'Male', company: 'KFC', image: 'https://angularjs.org/img/AngularJS-large.png' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', image: 'https://angularjs.org/img/AngularJS-large.png' },
    {
      name: 'Austin',
      gender: 'Male',
      company: 'Swimlane',
      image: 'https://angularjs.org/img/AngularJS-large.png'
    },
    { name: 'Dany', gender: 'Male', company: 'KFC', image: 'https://angularjs.org/img/AngularJS-large.png' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', image: 'https://angularjs.org/img/AngularJS-large.png' },
    {
      name: 'Austin',
      gender: 'Male',
      company: 'Swimlane',
      image: 'https://angularjs.org/img/AngularJS-large.png'
    },
    { name: 'Dany', gender: 'Male', company: 'KFC', image: 'https://angularjs.org/img/AngularJS-large.png' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', image: 'https://angularjs.org/img/AngularJS-large.png' },
    {
      name: 'Austin',
      gender: 'Male',
      company: 'Swimlane',
      image: 'https://angularjs.org/img/AngularJS-large.png'
    },
    { name: 'Dany', gender: 'Male', company: 'KFC', image: 'https://angularjs.org/img/AngularJS-large.png' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', image: 'https://angularjs.org/img/AngularJS-large.png' },
    {
      name: 'Austin',
      gender: 'Male',
      company: 'Swimlane',
      image: 'https://angularjs.org/img/AngularJS-large.png'
    },
    { name: 'Dany', gender: 'Male', company: 'KFC', image: 'https://angularjs.org/img/AngularJS-large.png' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', image: 'https://angularjs.org/img/AngularJS-large.png' },
    {
      name: 'Austin',
      gender: 'Male',
      company: 'Swimlane',
      image: 'https://angularjs.org/img/AngularJS-large.png'
    },
    { name: 'Dany', gender: 'Male', company: 'KFC', image: 'https://angularjs.org/img/AngularJS-large.png' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', image: 'https://angularjs.org/img/AngularJS-large.png' },
    {
      name: 'Austin',
      gender: 'Male',
      company: 'Swimlane',
      image: 'https://angularjs.org/img/AngularJS-large.png'
    },
    { name: 'Dany', gender: 'Male', company: 'KFC', image: 'https://angularjs.org/img/AngularJS-large.png' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', image: 'https://angularjs.org/img/AngularJS-large.png' },
  ];
  columns = [
    { name: 'name' },
    { name: 'gender' },
    { name: 'company' },
    { name: 'image' }
  ];
  chartVM: ChartViewModel;
  chartVMOneLabel: ChartViewModel;
  ngOnInit() {

    this.chartVMOneLabel = new ChartViewModel([
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      'line',
      {
        responsive: true
      }, true,
      [
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
      ]);


    this.chartVM = new ChartViewModel([
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ],
      ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      'line',
      {
        responsive: true
      }, true,
      [
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
      ]);

  }


}
