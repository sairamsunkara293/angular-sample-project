import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit {
  reciepes = [];
  constructor() { }

  ngOnInit() {
  }

}
