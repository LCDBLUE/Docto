// import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.page.html',
  styleUrls: ['./availability.page.scss'],
})
export class AvailabilityPage implements OnInit {

  avail=[
    {day:'Monday',fromTime:'09:00 AM',toTime:'07:00 PM'},
    {day:'Tuesday',fromTime:'09:00 AM',toTime:'07:00 PM'},
    {day:'Wednesday',fromTime:'09:00 AM',toTime:'07:00 PM'},
    {day:'Thursday',fromTime:'09:00 AM',toTime:'07:00 PM'},
    {day:'Friday',fromTime:'09:00 AM',toTime:'07:00 PM'},
    {day:'Saturday',fromTime:'09:00 AM',toTime:'07:00 PM'},
    
  ]

  constructor(public router:Router) { }

  ngOnInit() {
  }

}
