import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { RaftingComponent } from './rafting/rafting.component';
import { CampingComponent } from './camping/camping.component';
import { TravelComponent } from './travel/travel.component';
import { UserRegisterComponent } from './user-register/user-register.component';
//import { RegisterroutingModule } from '../registerrouting.module';
// import { AbcComponent } from './abc/abc.component';





@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    RaftingComponent,
    CampingComponent,
    TravelComponent,
    UserRegisterComponent,
    // AbcComponent,

  
    
  ],
  imports: [
    CommonModule,
    //RegisterroutingModule
  ]
})
export class RegisterModule { }
