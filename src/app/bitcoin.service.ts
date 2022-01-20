import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {


  constructor(private http: HttpClient) { }

  getBreweriesList() {
  return this.http.get("https://api.openbrewerydb.org/breweries");

  }
}

