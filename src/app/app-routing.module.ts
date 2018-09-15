import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageFourComponent } from './pages/page-four/page-four.component';
import { PageFiveComponent } from './pages/page-five/page-five.component';

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { state: 'home'} },
  { path: 'page-one', component: PageOneComponent, data: { title: 'Destroyer Album CSS Grid'} },
  { path: 'page-two', component: PageTwoComponent, data: {state: 'page-two'} },
  { path: 'page-three', component: PageThreeComponent, data: {state: 'page-three'} },
  { path: 'page-four', component: PageFourComponent, data: {state: 'page-four'} },
  { path: 'page-five', component: PageFiveComponent,  data: {state: 'page-five'} },
];

// @NgModule({
//   imports: [ RouterModule.forRoot(routes) ],
//   exports: [
//     RouterModule
//   ],
//   // declarations: []
// })


export const AppRoutingModule = RouterModule.forRoot(routes, { 
  // useHash: true
});
