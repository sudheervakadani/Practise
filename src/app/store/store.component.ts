import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  universitiesList: any[] = [];
  university: any[] = [];
  successResponse: any;
  errorResponse: any;
  showTable: boolean = false;
  errorMessage: any = 'Bad Request';
  productservice: any;
  countries: string[] = ["United States", "canada", "Nepal", "India", "Brazil", "japan", "china", "Korea"];
  country: any;

  ngOnInit(): void {}

  getProductData() {
    this.productservice.getUniversitiesList(this.country).subscribe(
      (successResponse: any) => {
        this.showTable = true;
        this.universitiesList = successResponse;
      },
      (errorResponse: any) => {
        this.errorMessage = errorResponse;
      }
    );
  }
}
