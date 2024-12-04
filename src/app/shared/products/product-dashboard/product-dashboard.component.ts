import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
prodArr!:Array<Iproducts>
  constructor(
    private _productService:ProductsService
  ) { }

  ngOnInit(): void {
    this.prodArr =this._productService.fetchProdAll()
  }

}
