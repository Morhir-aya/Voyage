import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ResHotelComponent} from "./res-hotel/res-hotel.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ResListComponent} from "./res-list/res-list.component";
import {Form1Component} from "./form1/form1.component";
import {Form2Component} from "./form2/form2.component";
import {Form3Component} from "./form3/form3.component";
import {UserSpaceComponent} from "./user-space/user-space.component";
import {VolComponent} from "./vol/vol.component";

const routes: Routes = [
  { path: "", redirectTo: "home-page", pathMatch: "full" },
  { path: "home-page", component: HomePageComponent },
  { path: "login-page", component: LoginComponent },
  { path: "reserv-page", component: VolComponent },
  { path: "signup-page", component: SignupComponent },
  { path: "hotel-page", component: ResHotelComponent },
  { path: "about-page", component: AboutUsComponent },
  { path: "reslist-page", component: ResListComponent },
  { path: "form1-page", component: Form1Component },
  { path: "form2-page", component: Form2Component },
  { path: "form3-page", component: Form3Component },
  { path: "userSpace-page", component: UserSpaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
