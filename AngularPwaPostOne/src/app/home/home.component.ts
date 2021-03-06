import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  autoControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
