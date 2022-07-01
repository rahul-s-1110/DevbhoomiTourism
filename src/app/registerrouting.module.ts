import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import{HomeComponent} from './register/home/home.component';
import{SignUpComponent} from './register/sign-up/sign-up.component';


const routes: Routes = [
  { path:'home' , component:HomeComponent},
  {path:'signup' , component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class routingComponent { }
export const RoutingMComponent = [HomeComponent,SignUpComponent];
                                                 
