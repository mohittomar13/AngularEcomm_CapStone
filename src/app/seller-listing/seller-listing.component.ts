import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MedicineData } from '../datatype';

@Component({
  selector: 'app-seller-listing',
  templateUrl: './seller-listing.component.html',
  styleUrls: ['./seller-listing.component.css']
})

export class SellerListingComponent implements OnInit {
  productList: undefined | MedicineData[];
  counter = 0;
  isDeleted = false;
  isNotDeleted = false;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.refreshProductList();
  }

  refreshProductList() {
    this.productService.listProducts()
      .subscribe((result) => {
        this.productList = result;
      });
  }

  deleteProduct(id: number) {
    console.log("id is: " + id); /**For debugging */

    this.productService.deleteProduct(id)
      .subscribe((httpResponse) => {
        console.log(httpResponse.status); /**For debugging */
        if (httpResponse.status === 200) {
          this.isDeleted = true;
          this.refreshProductList();
        } else {
          this.isNotDeleted = true;
        }
      });

    setTimeout(() => {
      this.isDeleted = false;
      this.isNotDeleted = false;
    }, 3000);

  }

}
