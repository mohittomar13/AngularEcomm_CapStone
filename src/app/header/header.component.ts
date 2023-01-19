import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((newRoute: any) => {
      if (newRoute.url) {
        if (localStorage.getItem('seller')
          && newRoute.url.includes('seller')) {
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            // this.sellerName = sellerData.userName.toString().toUpperCase();
            this.sellerName = sellerData.userName;
          }
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

}
