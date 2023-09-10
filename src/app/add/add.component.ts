import { Component, OnInit } from '@angular/core';
import { MapicpinserviceService } from '../mapicpinservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  userData = {
    mobile: '',
    name: '',
    birthdate: '',
    amount:''
  };
  constructor(private mapicpinserviceService: MapicpinserviceService) { }

  ngOnInit(): void {
  }
  changeData() {

  }
  addData = []
  add() {
    let payload = {
      mobile: this.userData.mobile,
      name: this.userData.name,
      birthdate: this.userData.birthdate,
      amount: this.userData.amount,
    }
    console.log(payload,"payload")
    //  this.addData.push(result.formData);
    //     this.firebaseservice.CreateOperation(result.formData)
    
    let data = this.mapicpinserviceService.addData(payload)
    console.log(data)
    // this.mapicpinserviceService.addData(payload).subscribe((data:any)=>{
    //   console.log(data)
    // })
   
  }
}
