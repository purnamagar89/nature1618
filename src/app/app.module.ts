import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { AppHomeComponent } from './home/app-home.component';
import { AppRoutingModule } from './app-routing.module';
import { OurStoriesComponent } from './stories/our-stories.component';
import { HowWeworkComponent } from './work/how-wework.component';
import { OurProjectsComponent } from './projects/our-projects.component';
import { GetInvolvedComponent } from './help/get-involved.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppHomeComponent,
    OurStoriesComponent,
    HowWeworkComponent,
    OurProjectsComponent,
    GetInvolvedComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
