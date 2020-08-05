import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges,DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  private myNumber: number;
 // @Input() myNewNumber:number;
 @Input()
  myNumber2:string;
  
  @Input()
    set myNewNumber(number: number){
      this.myNumber = number;
    }

    get myNewNumber(){
      return this.myNumber;
    }
  constructor() { 
    console.log("HHHEE : "+this.myNumber2)
  }

  ngOnChanges(changes: SimpleChanges){
   // debugger;
    const newNumberChanges: SimpleChange = changes.myNewNumber;
    console.log('Previous value - (ng on changes)', newNumberChanges.previousValue);
    console.log('Current value - (ng on changes)', newNumberChanges.currentValue);
    this.myNewNumber = newNumberChanges.currentValue;
  }

  ngOnInit(){
    console.log('ngOnInit value ', this.myNewNumber);
  }

  ngDoCheck(){
   console.log("ngDoCheck value: "+this.myNumber2);
  }

  ngAfterContentInit(){
    console.log("@@@--ngAfterContentInit---@@@");
  }

  ngAfterContentChecked(){
    console.log("This is was executing after ngAfterContentInit()...");
  }

  ngAfterViewInit(){
    console.log("This is was executing after ngAfterContentChecked()...");
  }

  ngAfterViewChecked(){
    console.log("This is was executing after ngAfterViewInit()...");
  }

  ngOnDestroy(){
    console.log("Component has been destroyed");
  }
}
