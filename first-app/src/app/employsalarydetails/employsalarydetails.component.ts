import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employsalarydetails',
  templateUrl: './employsalarydetails.component.html',
  styleUrls: ['./employsalarydetails.component.css']
})
export class EmploysalarydetailsComponent implements OnInit {
  employdetails: any = [];
  totalsalary: any = 235;
  constructor() { }

  ngOnInit() {
    this.employdetails.push({
      id: 1,
      name: 'sairam',
      basicsalary: 200,
      da: 300,
      hra: 455,
      total: 0
    },
      {
        id: 1,
        name: 'babu',
        basicsalary: 400,
        da: 3600,
        hra: 505,
        total: 0
      },
      {
        id: 1,
        name: 'leelasai',
        basicsalary: 800,
        da: 540,
        hra: 355,
        total: 0
      })
    this.resuability();
  }
  resuability() {
    let basicgrandtotal = 0, dagrandtotal = 0, hragrandtotal = 0, toatlsalarygrandtotal = 0;
    let maxsalary = [];
    for (let i = 0; i < this.employdetails.length; i++) {
      let sum = 0;
      sum = this.employdetails[i].basicsalary + this.employdetails[i].da + this.employdetails[i].hra;
      this.employdetails[i].total = sum;
      basicgrandtotal = this.employdetails[i].basicsalary + basicgrandtotal;
      dagrandtotal = this.employdetails[i].da + dagrandtotal;
      hragrandtotal = this.employdetails[i].hra + hragrandtotal;
      toatlsalarygrandtotal = this.employdetails[i].total + toatlsalarygrandtotal;
      maxsalary.push({ maxbasicsalary: this.employdetails[i].basicsalary, maxda: this.employdetails[i].da, maxhra: this.employdetails[i].hra, maxtotal: this.employdetails[i].total })
    }
    let index = this.employdetails.length;
    this.employdetails.push({
      name: 'Grand Total',
      basicsalary: basicgrandtotal,
      da: dagrandtotal,
      hra: hragrandtotal,
      total: toatlsalarygrandtotal
    },
      {
        name: 'Grand Avg',
        basicsalary: (basicgrandtotal / index).toFixed(3),
        da: (dagrandtotal / index).toFixed(3),
        hra: (hragrandtotal / index).toFixed(3),
        total: (toatlsalarygrandtotal / index).toFixed(3)
      },
      {
        name: 'Grand Total',
        basicsalary: Math.max(...maxsalary.map(o => o.maxbasicsalary), 0),
        da: Math.max(...maxsalary.map(o => o.maxda), 0),
        hra: Math.max(...maxsalary.map(o => o.maxhra), 0),
        total: Math.max(...maxsalary.map(o => o.maxtotal), 0)
      }
    )
  }
}
