import { Component, NgModule } from '@angular/core';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 title = 'blog';

 getUserValue(Value:any)
 {
    console.warn(Value)
 }
}

