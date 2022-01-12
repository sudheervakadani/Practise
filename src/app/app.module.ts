import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { StoreComponent } from './store/store.component';
import { MacComponent } from './mac/mac.component';
import { IphoneComponent } from './iphone/iphone.component';
import { IpadComponent } from './ipad/ipad.component';
import { WatchComponent } from './watch/watch.component';
import { SupportComponent } from './support/support.component';
import { MacbookProComponent } from './macbook-pro/macbook-pro.component';
import { MacbookAirComponent } from './macbook-air/macbook-air.component';
// import { Iphone } from './iphone13/iphone13component';
// import { Iphone } from './iphone13pro/iphone13procomponent';
// import { Iphone } from './iphone12/iphone12component';
// import { Iphone } from './iphone12pro/iphone12procomponent';
import { Iphone12ProComponent } from './iphone.12-pro/iphone.12-pro.component';
import { Iphone12Component } from './iphone.12/iphone.12.component';
import { Iphone13Component } from './iphone.13/iphone.13.component';
import { Iphone13ProComponent } from './iphone.13-pro/iphone.13-pro.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    StoreComponent,
    MacComponent,
    IphoneComponent,
    IpadComponent,
    WatchComponent,
    SupportComponent,
    MacbookProComponent,
    MacbookAirComponent,
    Iphone13Component,
    Iphone13ProComponent,
    Iphone12Component,
    Iphone12ProComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
