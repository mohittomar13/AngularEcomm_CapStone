import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url: string = "http://localhost:3000/seller";

  constructor(private httpClient: HttpClient) { }

  sellerSignUp(data: any) {
    return this.httpClient.post(this.url, data);
  }
}
