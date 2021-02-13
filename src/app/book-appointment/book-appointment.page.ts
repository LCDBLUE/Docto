import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.page.html',
  styleUrls: ['./book-appointment.page.scss'],
})
export class BookAppointmentPage implements OnInit {

  time=[
    {time:'10:00 AM'},
    {time:'11:00 AM'},
    {time:'11:30 AM'},
    {time:'12:10 PM'},
    {time:'1:00 PM'},
    {time:'1:10 PM'},
    {time:'2:00 PM'},
    {time:'3:00 PM'},
    {time:'4:00 PM'},
  ]
  name;
  age;
  contact;
  date;
  address;
  pincode;
  cause;
  
  constructor(public storage:Storage ,public navCtrl:NavController) { }

  ngOnInit() {
  }
  bookAppointment(){
    
    if(this.name && this.age && this.contact && this.date && this.address && this.pincode && this.cause){
      let data={name:this.name,age:this.age,contact:this.contact,date:this.date,address:this.address,pincode:this.pincode,cause:this.cause};
      // this.storage.remove('app');
      let newData=[];
      let dataStored=this.storage.get('appointment');
      if(dataStored){
        console.log(dataStored);
        
        newData.push(dataStored ,data);
        console.log(newData);
        
        this.storage.set("appointment",newData);
      }else{
        this.storage.set("appointment",data);
        console.log(data);
        
      }
     
      alert('Appointment Booked');
     this.navCtrl.navigateForward('home') 
     
    }
    else{
      alert('Please fill all required feilds')
    }
  }
}
