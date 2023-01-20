import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerListingComponent } from './seller-listing.component';

describe('SellerListingComponent', () => {
  let component: SellerListingComponent;
  let fixture: ComponentFixture<SellerListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
