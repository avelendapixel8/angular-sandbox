import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { routerTransition } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Angular Sandbox');
  }

  title = 'app';
  
  // for animation
  public getState(outlet) {
      return outlet.activatedRouteData.state;
  }
}
