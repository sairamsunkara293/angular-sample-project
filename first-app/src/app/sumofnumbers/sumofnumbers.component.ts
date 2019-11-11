import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumofnumbers',
  templateUrl: './sumofnumbers.component.html',
  styleUrls: ['./sumofnumbers.component.css']
})
export class SumofnumbersComponent implements OnInit {
  // basicSalary: any = 1;
  // hra: any = 2;
  // da: any = 3;
  sumof: number;
  employDetails: any = [];
  constructor() { }

  ngOnInit() {
    this.employDetails.push({ id: 1, label: 'Basic Salary', amount: 500 }, { id: 2, label: 'HRA', amount: 200 }, { id: 3, label: 'Basic Salary', amount: 300 })
    this.reusablity();
  }

  basicSalaryMethod(id: any, value: any) {
    const sai = this.employDetails.filter(item => item.id != id);
    this.reusablity();
  }
  reusablity() {
    let sum = 0
    for (let i = 0; i < this.employDetails.length; i++) {
      sum = sum + this.employDetails[i].amount;

    }
    this.sumof = sum;
  }
}
