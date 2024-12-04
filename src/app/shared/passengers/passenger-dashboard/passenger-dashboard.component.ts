import { Component, OnInit } from '@angular/core';
import { Ipassengers } from '../../models/passenger';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
passArr!:Array<Ipassengers>;
checkInCount!:number;
  constructor(
    private _passengerService :PassengerService
  ) { }

  ngOnInit(): void {
  this.passArr =  this._passengerService.fetchAllpass()
  }

 getCheckInCount(){
 this.checkInCount=  this.passArr.filter(pass=>{
    return pass.checkedIn
  }).length
 }
 onRemoveUpdate(eve:any){
  this.getCheckInCount()
 }
}
