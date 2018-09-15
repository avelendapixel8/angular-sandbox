import { Title, BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EarnObjectComponent } from './shared/earn-object/earn-object.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { DevNavComponent } from './shared/dev-nav/dev-nav.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageFiveComponent } from './pages/page-five/page-five.component';
import { PageFourComponent } from './pages/page-four/page-four.component';
import { ReadMoreComponent } from './shared/read-more/read-more.component';
import { StarRatingComponent} from './shared/star-rating/star-rating.component';
import { WeatherStationComponent } from './shared/weather-station/weather-station.component';

@NgModule({
  declarations: [
    AppComponent,
    EarnObjectComponent,
    HomeComponent,
    PageOneComponent,
    DevNavComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFiveComponent,
    PageFourComponent,
    ReadMoreComponent,
    StarRatingComponent,
    WeatherStationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
