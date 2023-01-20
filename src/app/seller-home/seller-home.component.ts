import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MedicineData } from '../datatype';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  sellerName: string = '';

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }


  /**
   * Not able to understand the below code.
   * Will check it later to understand it better.
   * 
   * Why we using [] with json.parse() method??
   */
  ngOnInit(): void {
    let sellerStore = localStorage.getItem('seller');
    let sellerData = sellerStore && JSON.parse(sellerStore)[0];
    this.sellerName = sellerData.userName;
  }
}
