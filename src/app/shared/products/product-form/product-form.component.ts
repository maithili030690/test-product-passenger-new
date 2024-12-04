import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { PStatus } from '../../models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
@ViewChild('productForm')productForm!:NgForm
  constructor(
    private _uuidService:UuidService,
    private _productService:ProductsService
  ) { }

  ngOnInit(): void {
  }
  onProductAdd(){
    if(this.productForm.valid){
      let prodObj = {...this.productForm.value,
        pid:this._uuidService.generateUuid(),
        pstatus:PStatus.InProgress
        
      }
      console.log(prodObj)
      this.productForm.reset()
      this._productService.createNewProd(prodObj)
    }
  }
}
