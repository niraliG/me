import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import {LandpageComponent} from './landpage/landpage.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { P404Component } from './p404/p404.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
    { path: '', component: LandpageComponent },
    {path :'works', component: ProjectsComponent},
    {path :'contact', component: ContactComponent},
    {path : 'blog', component: BlogComponent},
    { path: '**', component: P404Component}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
