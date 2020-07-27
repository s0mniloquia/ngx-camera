import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
  }

  public scannerEnabled = true;
  scanSuccessHandler($event){
    console.log('scanSuccess');
    console.log($event);
  }
  scanErrorHandler($event){
    console.log('scanErrorHandler');
    console.log($event);
  }
  scanFailureHandler($event){
    console.log('scanFailureHandler');
    console.log($event);
  }
  scanCompleteHandler($event){
    console.log('scanCompleteHandler');
    console.log($event);
    if($event.text){
      window.location.href = $event.text;

    }
  }
}
