import { inject, Injectable } from '@angular/core';
import { Iproducts, PStatus } from '../models/products';
import { SanckbarService } from './sanckbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _snackbarService =inject(SanckbarService)
  productsArr :Array<Iproducts>=[											
  {											
    pname:"Samsung 31",											
    pdetails:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni iste a architecto amet id quis, eligendi laboriosam corporis sed nostrum?",											
    pid:'123',											
     pstatus:PStatus.InProgress											
    },											
    {											
    pname:"Samsung 32",											
    pdetails:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni iste a architecto amet id quis, eligendi laboriosam corporis sed nostrum?`,											
    pid:'124',											
    pstatus:PStatus.Dispatched											
                          
   },
   {											
    pname:"Samsung 33",											
    pdetails:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni iste a architecto amet id quis, eligendi laboriosam corporis sed nostrum?`,											
    pid:'125',											
    pstatus:PStatus.Delivered										
                          
   }										
                          
    ]											
    
  constructor() { }
  fetchProdAll():Array<Iproducts>{
    //api call to fetch all prod data
    return this.productsArr
  }
  createNewProd(prodObj:Iproducts){
    //api call to add new prod by from and send to db
    this.productsArr.push(prodObj)
    this._snackbarService.opensnackbar(`New Product is ${prodObj.pname}Added Successfully!!!`)

  }
  updateStatus(updatedstat:PStatus,pid:string){
    //api call to updated status of prod obj in db
    let getIndex =this.productsArr.findIndex(prod=> prod.pid === pid)
    this.productsArr[getIndex].pstatus=updatedstat
    this._snackbarService.opensnackbar(`The Product is Updated Successfully and its new updated status is ${updatedstat}!!!`)
  }
}
