import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstProject';
  imageUrl:string = "image.png"
  url:string="https://www.bridgelabz.com/";

  
  message:String = "Hello from BridgeLabz"
  onClick(){
    window.open(this.url,"_blank");
  }
}
