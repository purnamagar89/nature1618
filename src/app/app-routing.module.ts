import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './home/app-home.component';
import { AppComponent } from './app.component';
import { OurStoriesComponent } from './stories/our-stories.component';
import { AboutUsComponent } from './aboutus/about-us.component';
import { GetInvolvedComponent } from './help/get-involved.component';
import { OurWorkComponent } from './ourwork/our-work.component';
const routes: Routes = [

    {
         path: '', component: AppHomeComponent
    },
    {
        path: 'aboutus', component: AboutUsComponent
    },
    {
        path: 'ourwork', component: OurWorkComponent
    },
    {
        path: 'getinvolved', component: GetInvolvedComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }