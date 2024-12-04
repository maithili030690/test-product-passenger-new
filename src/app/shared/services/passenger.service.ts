import { Injectable } from '@angular/core';
import { Ipassengers } from '../models/passenger';
import { SanckbarService } from './sanckbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  passengersArr:Array<Ipassengers> = [					
    {					
     id: 1,					
     fullname: 'Stephen',					
     checkedIn: true,					
     checkInDate: 1490742000000,					
     children: null,					
    },					
    {					
     id: 2,					
     fullname: 'Rose',					
     checkedIn: false,					
     checkInDate: null,					
     children: [					
     { name: 'Ted', age: 12 },					
     { name: 'Chloe', age: 7 },					
     ],					
     },					
     {					
     id: 3,					
     fullname: 'James',					
     checkedIn: true,					
     checkInDate: 1491606000000,					
     children: null,					
   },					
     {					
     id: 4,					
     fullname: 'Louise',					
     checkedIn: true,					
     checkInDate: 1488412800000,					
     children: [{ name: 'Jessica', age: 1 }],					
     },					
     {					
     id: 5,					
     fullname: 'Tina',					
     checkedIn: false,					
     checkInDate: null,					
     children: null,					
     },					
     ]					
    
  constructor(
   private _snackbarService :SanckbarService
  ) { }
  fetchAllpass():Array<Ipassengers>{
    //Api call to fetch All data
    return this.passengersArr
  }
  updatePassInfo(updatedPass:Ipassengers){
    let getIndex =this.passengersArr.findIndex(pass=>{
      return pass.id ===updatedPass.id
    
    })
    this.passengersArr[getIndex]=updatedPass
    this._snackbarService.opensnackbar(`The passenger is updated successfully `)
  }
  removePass(id:number){
    //Api call to remove pass of ggiven id from db
    let getIndex =this.passengersArr.findIndex(pass=>pass.id===id)
    console.log(getIndex)
    this.passengersArr.splice(getIndex,1)
    this._snackbarService.opensnackbar(`The passenger is removed successfully`)
  }
}
