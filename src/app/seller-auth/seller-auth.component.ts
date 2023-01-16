import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private sellerService: SellerService) { }
  signUp(data: object): void {
    this.sellerService.sellerSignUp(data).subscribe((result) => {
      console.log(result);
    });
  }
}
