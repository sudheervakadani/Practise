import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  bitCoinList: any[] =[];
  bitcoin: any []=[];
  showTable: boolean = false;
  successResponse: any;
  errorMessage: any;


  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
  }
  getBitCoinPrices () {
    this.bitcoinService.getBreweriesList().subscribe(
    (successResponse: any) => {
      this.showTable = true;
      this.bitCoinList = successResponse;
      console.log(this.bitCoinList);
    },
    (errorResponse: any) => {
      this.errorMessage = "Bad Request";
      console.log(this.errorMessage);
    }
    );
  }

}
