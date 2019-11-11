import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component'
import { ServersComponent } from './servers/servers.component';
import { SumofnumbersComponent } from './sumofnumbers/sumofnumbers.component';
import { EmploysalarydetailsComponent } from './employsalarydetails/employsalarydetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SumofnumbersComponent,
    EmploysalarydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
