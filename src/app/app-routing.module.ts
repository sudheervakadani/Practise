import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpadComponent } from './ipad/ipad.component';
import { Iphone12ProComponent } from './iphone.12-pro/iphone.12-pro.component';
import { Iphone12Component } from './iphone.12/iphone.12.component';
import { Iphone13ProComponent } from './iphone.13-pro/iphone.13-pro.component';
import { Iphone13Component } from './iphone.13/iphone.13.component';
import { IphoneComponent } from './iphone/iphone.component';
import { MacComponent } from './mac/mac.component';
import { MacbookAirComponent } from './macbook-air/macbook-air.component';
import { MacbookProComponent } from './macbook-pro/macbook-pro.component';
import { StoreComponent } from './store/store.component';
import { SupportComponent } from './support/support.component';
import { WatchComponent } from './watch/watch.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  {
    path: 'mac',
    component: MacComponent,
    children: [
      { path: 'macbook-pro', component: MacbookProComponent },
      { path: 'macbook-air', component: MacbookAirComponent },
    ],
  },
  {
    path: 'iphone',
    component: IphoneComponent,
    children: [
      { path: 'iphone13Pro', component: Iphone13ProComponent },
      { path: 'iphone13', component: Iphone13Component },
      { path: 'iphone12Pro', component: Iphone12ProComponent },
      { path: 'iphone12', component: Iphone12Component },
    ],
  },
  { path: 'ipad', component: IpadComponent },
  { path: 'watch', component: WatchComponent },
  { path: 'support', component: SupportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
