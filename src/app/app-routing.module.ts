import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './login/register-user/register-user.component';
import { PetDetailsComponent } from './pet-list/pet-details/pet-details.component';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register-user', 
    component: RegisterUserComponent 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: '', 
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { 
    path: 'pet-list', 
    component: PetListComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'pet-details', 
    component: PetDetailsComponent ,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
