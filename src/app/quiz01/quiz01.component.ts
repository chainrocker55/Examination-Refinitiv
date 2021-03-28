import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-quiz01',
  templateUrl: './quiz01.component.html',
  styleUrls: ['./quiz01.component.css']
})
export class Quiz01Component implements OnInit {

  constructor(private http: HttpClient) { }
  inputValue!: number;
  selected:Number = 1;
  resultCol3: boolean = true;
  disableSelect = new FormControl(false);

  ngOnInit(): void {

  }
  applyValue(event: Event) {

    const Value = (event.target as HTMLInputElement).value;
    
    const value = Math.round(parseFloat(Value))
    
    if(Number.isNaN(value)){
      this.inputValue = 1;
    }else if(value < 0){
      this.inputValue = 1;
    }else{
      this.inputValue = value
    }
    this.calculeted();
    
  
  }

  changeSelector(event: Event) {

    const Value = (event.target as HTMLInputElement).value;
    
    const value = Math.round(parseFloat(Value))
    this.selected = value;
    
    this.calculeted();
  
  }

  calculeted(){
    
    if(this.selected == 1){
      this.resultCol3 = this.isPrime(this.inputValue);
    }else if(this.selected == 2){
      this.resultCol3 = this.isFibanacci(this.inputValue);
    }

  }
  isPrime(num:number){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false; 
    return num > 1;
  }

  isFibanacci(num:number){
    if (isSquare(5*(num*num)-4) || isSquare(5*(num*num)+4)) {
       return true;
    } else { return false; }
}

}
function isSquare(n: number) {
  return n > 0 && Math.sqrt(n) % 1 === 0;
}

