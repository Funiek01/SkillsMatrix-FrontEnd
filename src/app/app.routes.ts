import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { ManagerFeedbackComponent } from './components/manager-feedback/manager-feedback.component';
import { EditProfileAdminComponent } from './components/edit-profile-admin/edit-profile-admin.component';
import { HomeComponent } from './components/home/home.component';
import { UserSelfAssessmentComponent } from './components/user-self-assessment/user-self-assessment.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminDashboardComponent},
    {path: 'add-user', component: AddUserComponent},

    {path: 'employee', component: EmployeeDashboardComponent},
    {path:'reset-password', component: ResetPasswordComponent},

    {path: 'manager-feedback', component: ManagerFeedbackComponent},
    {path: 'edit-user-admin', component: EditProfileAdminComponent},
    {path: 'home', component: HomeComponent},
    {path: 'self-assessment-user', component: UserSelfAssessmentComponent},
    { path: '**', redirectTo: '/home' },
    
    
];
