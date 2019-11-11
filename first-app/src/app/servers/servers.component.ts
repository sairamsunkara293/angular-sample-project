import { Component, OnInit } from '@angular/core';


@Component({
  selector: '[app-servers]',
  // template: `<app-server></app-server>`,
  templateUrl:`./servers.component.html`,
  styles: [`
  p {
 color:dodgerblue !important;
  }`]
})
export class ServersComponent implements OnInit {
  allowedServer = false;
  serverStatus:any = "server is not created";
  // serverName:any='TestServer';
  // userName:any="";
  // constructor() { 
  //   setTimeout(()=>{
  //     this.allowedServer=true;
  //   },2000)
  // }
  
//   serverCreated(){
//     this.serverStatus = "server is created"
//   }
//   updateServerName(event: Event){
// this.serverName = (<HTMLInputElement>event.target).value;
//   }
// emptyValue :any= "";
//   resetButton(){
//     return this.userName = ''
//   }
serverCreated(){
  this.allowedServer = true;
  this.serverStatus = "server is created success";
}
  ngOnInit() {
  }
}
