import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MedicineData } from '../datatype';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | MedicineData;
  isUpdated: boolean = false;
  isNotUpdated: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let prodId = this.activatedRoute.snapshot.paramMap.get('id');

    prodId && this.productService.getProduct(prodId)
      .subscribe((httpResponse) => {
        console.log(httpResponse);
        this.productData = httpResponse;
      });
  }

  updateProduct(product: MedicineData) {
    console.log(product);

    /**
     * As Id was undefined in the 'product'
     * so pushed productData id into product id
     */
    if (this.productData) {
      product.id = this.productData.id;
    }

    this.productService.updateProduct(product)
      .subscribe((httpResponse) => {
        if (httpResponse) {
          this.isUpdated = true;
        } else {
          this.isNotUpdated = true;
        }
      });

    setTimeout(() => {
      this.isUpdated = false;
      this.isNotUpdated = false;
      this.router.navigate(['seller-listing']);
    }, 3000);
  }

}
