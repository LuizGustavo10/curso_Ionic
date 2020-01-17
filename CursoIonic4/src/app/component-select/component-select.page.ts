import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-select',
  templateUrl: './component-select.page.html',
  styleUrls: ['./component-select.page.scss'],
})
export class ComponentSelectPage implements OnInit {

  customAlertOptions: any = {
    header : 'Pizza Toppings',
    subHeader : 'Select you toppings',
    message : '$1.00 per topping',
    translucent: true
  };

  constructor() { }

  ngOnInit() {
  }

}
