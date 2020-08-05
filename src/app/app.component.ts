import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private number:number = 1234;
  name: string = "Satish";
  isVisible: boolean = true;
  user = {
    name: "Ms Dhoni"
  }

  switchVisibility(){
    this.isVisible = !this.isVisible;
  }

  updateValue(){
    this.user.name = "Virat Kohli";
  }

  get counter(){
    return this.number;
  }

  set counter(value){
    this.number = value;
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
}
