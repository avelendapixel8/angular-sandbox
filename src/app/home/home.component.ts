import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { EarnObjectComponent } from '../shared/earn-object/earn-object.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
  @Input() textParagraph: string = ' Helo world, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna nulla, scelerisque eu porttitor eget, facilisis nec massa. In sed justo semper, blandit diam cursus, elementum arcu. Cras vitae lorem vel mauris tempor molestie aliquet nec nisl. Ut vitae sodales ex. Nunc congue dolor ac ante dignissim convallis. Fusce lobortis eros mi, et porta sem vehicula et. Suspendisse at eros vel lectus ornare vestibulum. Morbi nisl quam, finibus tristique enim ut, suscipit egestas lorem. Fusce interdum nec sapien et posuere. Sed cursus sem velit, vitae maximus sapien aliquam eget. Donec et rhoncus ligula, ut mattis nulla. Cras malesuada luctus arcu iaculis ultricies.Praesent ut justo euismod, rhoncus nunc eu, fermentum urna. Cras arcu lacus, ultrices et pretium id, fringilla a felis. Phasellus eget tortor dui. Ut dapibus nunc vitae ornare ultricies. Fusce lobortis sapien quis purus luctus sodales. Donec placerat euismod purus. Pellentesque ac pulvinar lectus.';
}
