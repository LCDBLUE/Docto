import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  service=[
    {name:'Endoscopy'},
    {name:'X-radiation'},
    {name:'Prthopaedics'},
    {name:'Cardiac CT scan'},
    {name:'Blood Testing'},
    {name:'Allergy Testing'},
    {name:'Implantable Cardiac'},
    {name:'Pacemaker checks'},
    {name:'Skin Testing'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
