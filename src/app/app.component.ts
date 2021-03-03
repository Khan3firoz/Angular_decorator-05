import { Component, HostListener, Inject } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decorators';
  constructor(@Inject(MyServiceService) myServiceService) {
    console.log(myServiceService)
    console.log('This is Component')
  }


// is method decorator auto start after serving apps
  @HostListener('click', ['$event'])
  onhostclick(event:Event){
    alert('HostListner on clicking anywhere')
  }

  //Parameter Decorator
}
