import { HttpClient, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { MedicineData } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /**
   * doing {observe: 'response'}
   * results in error in seller-update-product-component
   *
   * this results in not able to assign
   * productData = httpResponse
   */


  prodApiUrl: string = "http://localhost:3000/products";
  isProductAdded = new EventEmitter<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  addProduct(data: MedicineData) {
    return this.httpClient.post(
      this.prodApiUrl,
      data,
      { observe: 'response' }
    ).subscribe((result) => {
      if (result) {
        this.isProductAdded.emit(true);
      } else {
        this.isProductAdded.emit(false);
      }
    });
  }

  listProducts() {
    return this.httpClient.get<MedicineData[]>(this.prodApiUrl);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(
      this.prodApiUrl + `/${id}`,
      { observe: 'response' });
  }

  /**
   * doing {observe: 'response'}
   * results in error in seller-update-product-component
   * 
   * this results in not able to assign
   * productData = httpResponse
   */
  getProduct(id: string) {
    return this.httpClient.get<MedicineData>(
      this.prodApiUrl + `/${id}`);
  }

  /**
   * Not using {observe: 'response'}
   * here too. I will check it later what it does.
   */
  updateProduct(product: MedicineData) {
    console.log("***********: " + product.id);
    
    return this.httpClient.put<MedicineData>(
      this.prodApiUrl + `/${product.id}`,
      product,
      { observe: 'response' });
  }



}
