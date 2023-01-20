import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MedicineData } from '../datatype';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})

export class SellerAddProductComponent implements OnInit {
  isAdded: boolean = false;
  isNotAdded: boolean = false;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }

  addMedicine(data: MedicineData) {
    this.productService.addProduct(data);
    this.productService.isProductAdded.subscribe((noError) => {
      if (noError) {
        this.isAdded = true;
      } else {
        this.isNotAdded = true;
      }
      setTimeout(() => {
        this.isAdded = false;
        this.isNotAdded = false;
      }, 3000);
    });
  }

}
