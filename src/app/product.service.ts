import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http: HttpClient) { }

  getUniversityList(country: string){
   return this.http.get(`http://universities.hipolabs.com/search?country=${country}`);
  }
}
