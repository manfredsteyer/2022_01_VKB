import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { DefaultFlightService, DummyFlightService, FlightService } from './flight.service';
import { CityPipe } from './shared/city.pipe';

@NgModule({
   imports: [
      BrowserModule,       // Rexportiert: CommonModule
      HttpClientModule,
      FormsModule,
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      FlightSearchComponent,
      CityPipe
   ],
   providers: [
      // { 
      //    provide: FlightService, 
      //    useClass: DefaultFlightService
      //    // useFactory: (http: HttpClient) => {
      //    //    return new DefaultFlightService(http);
      //    // },
      //    // deps: [HttpClient]
      // }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
