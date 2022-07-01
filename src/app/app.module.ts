import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import{ LoginComponent } from './register/login/login.component';
// import {RoutingMComponent , routingComponent} from './registerrouting.module';
// import{ SignUpComponent } from './register/sign-up/sign-up.component';
// import{ HomeComponent } from './register/home/home.component';
import{ReactiveFormsModule} from '@angular/forms';
import{ RaftingComponent } from './register/rafting/rafting.component';
import{ CampingComponent } from './register/camping/camping.component';
import{TravelComponent} from './register/travel/travel.component';
import{UserRegisterComponent} from './register/user-register/user-register.component';
// import{RegisterroutingModule} from './registerrouting.module';
// import{RegisterModule} from './register/register.module';
import{routingComponent} from './registerrouting.module';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      // RoutingMComponent ,
      RaftingComponent,
      CampingComponent,
      TravelComponent,
      UserRegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routingComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
