import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { AppHomeComponent } from './home/app-home.component';
import { AppRoutingModule } from './app-routing.module';
import { OurStoriesComponent } from './stories/our-stories.component';
import { AboutUsComponent } from './aboutus/about-us.component';
import { OurWorkComponent } from './ourwork/our-work.component';
import { GetInvolvedComponent } from './help/get-involved.component';
import { AppFooterComponent } from './footer/app-footer.component';


@NgModule({
  imports:[
 CommonModule,
NgtUniversalModule,
 
    
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppHomeComponent,
    OurStoriesComponent,
    AboutUsComponent,
    OurWorkComponent,
    GetInvolvedComponent
  ],
})
export class AppModule { }
