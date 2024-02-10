import { Routes } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { userGuard } from './guards/user/user.guard';
import { guestGuard } from './guards/guest/guest.guard';

export const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [guestGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [guestGuard]},
  {path: 'job-listings', component: JobListComponent},
  {path: 'job-details', component: JobDetailsComponent, canActivate: [userGuard]},
  {path: 'create-job', component: CreateJobComponent, canActivate: [userGuard]},
  {path: '**', component: NotFoundComponent},
];
