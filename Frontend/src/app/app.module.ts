import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ResHotelComponent } from './res-hotel/res-hotel.component';
import { ResListComponent } from './res-list/res-list.component';
import { SignupComponent } from './signup/signup.component';
import { UserSpaceComponent } from './user-space/user-space.component';
import { VolComponent } from './vol/vol.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    HomePageComponent,
    LoginComponent,
    ResHotelComponent,
    ResListComponent,
    SignupComponent,
    UserSpaceComponent,
    VolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
