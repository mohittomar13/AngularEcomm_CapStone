import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SellerInfo } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginFailed = new EventEmitter<boolean>(false);
  signupURL: string = "http://localhost:3000/seller";

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  sellerPageReload() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home'])
    }
  }

  sellerSignUp(data: SellerInfo) {
    return this.httpClient.post(
      this.signupURL,
      data,
      { observe: 'response' }
    ).subscribe((result) => {
      if (result) {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      }
    });
  }

  sellerLogin(data: SellerInfo) {
    return this.httpClient.get(
      `http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      { observe: 'response' }
    ).subscribe((result: any) => {
      if (result && result.body && result.body.length) {
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      } else {
        this.isLoginFailed.emit(true);
      }
    });
  }

}

