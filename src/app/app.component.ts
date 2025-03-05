import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstProject';
  imageUrl:string = "image.png"
  url:string="https://www.bridgelabz.com/";
  name:String="";

  
  message:String = "Hello from BridgeLabz"
  onClick(){
    window.open(this.url,"_blank");
  }
}
