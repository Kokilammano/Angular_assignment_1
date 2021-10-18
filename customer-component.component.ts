import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit {
 
    customerID:number=100;
    customerName:string="Anu";
    customerEmail:string="anu@gmail.com";
    customerAge:number=25;
    customerGender:string="f";
    customerAddress:string="Chennai";
  
  constructor() { }

  ngOnInit(): void {
  }

}
