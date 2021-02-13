import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.page.html',
  styleUrls: ['./my-appointment.page.scss'],
})
export class MyAppointmentPage implements OnInit {
  content:boolean=false;
  demo=[{name:'Demo',time:'5:00 PM',cause:'Eye Checkup'},
  {name:'Demo 1',time:'7:00 PM',cause:'Dental Checkup'},]
  constructor(public router:Router ,public navCtrl:NavController) { }

  ngOnInit() {
  }
  onCancel(){
    alert('Please Contact Hospital Staff');
    this.navCtrl.navigateForward('home')
  }

}
