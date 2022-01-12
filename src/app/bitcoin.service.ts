import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {


  constructor(private http: HttpClient) { }

  getBitCoinList() {
  return this.http.get<any[]>("echo/get/json");

  }
}

