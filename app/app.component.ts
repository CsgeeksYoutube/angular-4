import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csgeeks';
  visible= true;
  changeDiv(){
  	this.visible = !this.visible;
  }
  
  }

