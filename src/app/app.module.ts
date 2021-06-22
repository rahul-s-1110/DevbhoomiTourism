import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import{ LoginComponent } from './register/login/login.component';
import{ SignUpComponent } from './register/sign-up/sign-up.component';
import{ HomeComponent } from './register/home/home.component';
import{ReactiveFormsModule} from '@angular/forms';
import{ YogapageComponent } from './register/yogapage/yogapage.component'
import{ RaftingComponent } from './register/rafting/rafting.component';
import{ CampingComponent } from './register/camping/camping.component';


@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      SignUpComponent,
      HomeComponent,
      YogapageComponent,
      RaftingComponent,
      CampingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
