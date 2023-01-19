import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SellerInfo } from '../datatype';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})

export class SellerAuthComponent implements OnInit {
  constructor(
    private sellerService: SellerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.sellerService.sellerPageReload();
  }

  sellerSignUp(data: SellerInfo): void {
    this.sellerService.sellerSignUp(data);
  }

  authError = false;
  sellerLogin(data: SellerInfo) {
    this.sellerService.sellerLogin(data);
    this.sellerService.isLoginFailed.subscribe((isError)=>{
      this.authError = true;
    });
  }

  showLoginPage = true;
  openLogin() {
    this.showLoginPage = true;
  }

  openSignup() {
    this.showLoginPage = false;
  }


}
