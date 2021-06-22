import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { YogapageComponent } from './yogapage/yogapage.component';
import { RaftingComponent } from './rafting/rafting.component';
import { CampingComponent } from './camping/camping.component';
// import { HompageComponent } from './hompage/hompage.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    YogapageComponent,
    RaftingComponent,
    CampingComponent,
    // HompageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { }
