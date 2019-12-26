import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { AppHomeComponent } from './home/app-home.component';
import { AppRoutingModule } from './app-routing.module';
import { OurStoriesComponent } from './stories/our-stories.component';
import { AboutUsComponent } from './aboutus/about-us.component';
import { OurProjectsComponent } from './projects/our-projects.component';
import { GetInvolvedComponent } from './help/get-involved.component';
import { AppFooterComponent } from './footer/app-footer.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppHomeComponent,
    OurStoriesComponent,
    AboutUsComponent,
    OurProjectsComponent,
    GetInvolvedComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
