import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
