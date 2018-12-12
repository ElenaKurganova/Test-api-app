import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JobDetailComponent} from './job-detail/job-detail.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {JobsComponent} from './jobs/jobs.component';

// const routes: Routes = [
//   {path: 'login', component: LoginComponent },
//   {path: 'job-details/:id', component: JobDetailComponent},
//   {path: 'home', component: HomeComponent},
//   {path: '', redirectTo: '/home', pathMatch: 'full'}
// ];

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'job-details/:id', component: JobDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
