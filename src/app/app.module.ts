import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { CompNameComponent } from './comp-name/comp-name.component';

// /----- feature -----------------\
// -------------------- main ------------------------>
//                              \--- release v12 ----->

@NgModule({
   imports: [
      BrowserModule,       // Rexportiert: CommonModule
      HttpClientModule,    // HttpClient --> root-scope
      FlightBookingModule
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      CompNameComponent
   ],
   providers: [
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
