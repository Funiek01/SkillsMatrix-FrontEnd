import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ManagerFeedbackComponent } from './manager-feedback/manager-feedback.component';
import { EditProfileAdminComponent } from './edit-profile-admin/edit-profile-admin.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminDashboardComponent},
    {path: 'add-user', component: AddUserComponent},
    {path: 'manager-feedback', component: ManagerFeedbackComponent},
    {path: 'edit-user-admin', component: EditProfileAdminComponent},
    {path: 'home', component: HomeComponent},
    { path: '**', redirectTo: '/home' },
];
