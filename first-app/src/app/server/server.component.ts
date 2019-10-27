import { Component } from '@angular/core';


@Component({
    "selector":"app-server",
    "templateUrl":"./server.component.html",
    "styles":[`
    h1{
        color: yellow !important;
    }`]
})
export class ServerComponent {
title = "hai this server"
}