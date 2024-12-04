import { Component, Input, OnInit } from '@angular/core';
import { Iproducts, PStatus } from '../../models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
@Input()productObj!:Iproducts

productStatus =PStatus
  constructor(
    private _productService:ProductsService
  ) { }

  ngOnInit(): void {
  }

  onStatusChange(updatedStatus:PStatus){
    console.log(this.productObj)
    console.log(updatedStatus)
    this._productService.updateStatus(updatedStatus,this.productObj.pid)


  }
}
