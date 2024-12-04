import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassengers } from '../../models/passenger';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
@Input()passObj!:Ipassengers
@Output()emitPassInfo:EventEmitter<Ipassengers>=new EventEmitter<Ipassengers>()
isInEditMode :boolean =false
  constructor(
    private _passService:PassengerService
  ) { }

  ngOnInit(): void {
  }
  onUpdateName(updatedName:string){
    this.isInEditMode=!this.isInEditMode
    console.log({...this.passObj,fullName:updatedName})
    this._passService.updatePassInfo({...this.passObj,fullname:updatedName})
  }
  onRemove(id:number){
console.log(id)
this._passService.removePass(id)
this.emitPassInfo.emit(this.passObj)

  }
}
