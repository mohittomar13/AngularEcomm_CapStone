import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MedicineData } from '../datatype';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  popularProducts: undefined | MedicineData[];
  allProducts: undefined | MedicineData[];
  carouselImages: string[] = [];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.carouselImages.push("https://connect-assets.prosple.com/cdn/ff/HprK34gbjtxop-tY_qX-z-13Voqq6DxWna1YdctaUcs/1568104851/public/2019-09/Feature-article-engineering-RD-manufacturing-science-industry-overview-1780x640-2019.png");
    this.carouselImages.push("https://connect-assets.prosple.com/cdn/ff/VenfH13-CVCRoURPHIdUxdOE4hsOD73oG53pT0K34kA/1568695892/public/2019-09/Feature-article-careers-public-vs-private-health-1780x640-2019.png");
    this.carouselImages.push("https://ethz.ch/en/news-and-events/eth-news/news/2020/10/paracetamol-poisonings-up/_jcr_content/pageimages/imageCarousel.imageformat.lightbox.293019953.jpg");

    this.productService.popularProducts()
      .subscribe((responseBody) => {
        this.popularProducts = responseBody;
      });

    this.loadProducts();
  }

  loadProducts() {
    this.productService.loadProducts()
      .subscribe((responseBody) => {
        console.log(responseBody);
        this.allProducts = responseBody;
      });
  }
}
