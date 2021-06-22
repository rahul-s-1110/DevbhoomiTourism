import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
    title='blog';
    getUserValue(Value:any){
      console.warn(Value)
    }
  

}
