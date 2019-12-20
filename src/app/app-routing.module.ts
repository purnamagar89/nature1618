import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './home/app-home.component';
import { AppComponent } from './app.component';
import { OurStoriesComponent } from './stories/our-stories.component';
import { HowWeworkComponent } from './work/how-wework.component';
import { GetInvolvedComponent } from './help/get-involved.component';
import { OurProjectsComponent } from './projects/our-projects.component';
const routes: Routes = [

    {
         path: '', component: AppHomeComponent
    },
    {
        path: 'ourstories', component: OurStoriesComponent
    },
    {
        path: 'howwework', component: HowWeworkComponent
    },
    {
        path: 'ourprojects', component: OurProjectsComponent
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