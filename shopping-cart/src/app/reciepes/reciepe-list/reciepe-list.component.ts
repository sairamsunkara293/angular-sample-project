import { Component, OnInit } from '@angular/core';
import { Reciepe } from '../reciepe.model';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit {
  reciepes: Reciepe[] = [new Reciepe('A Test Reciepe', 'This is simple test page', 
  'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=-tA_cB-C')
  ];
  constructor() { }

  ngOnInit() {
  }

}
