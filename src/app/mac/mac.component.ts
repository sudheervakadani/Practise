import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mac',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.css']
})
export class MacComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
navigateToType(name: string) {
 this.router.navigate(['mac/' + name]);
//  console.log(`mac/${name}`);
  }
}
// mac/macbook-pro
