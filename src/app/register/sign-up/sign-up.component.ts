import { Component,NgModule } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
title='blog';
getUserValue(Value:any){
  console.warn(Value)
}
  

}
