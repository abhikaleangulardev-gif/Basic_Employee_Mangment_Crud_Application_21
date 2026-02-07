import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:"dashboard",loadComponent:()=>import('./component/dashboard/dashboard').then(m=>m.Dashboard)},
    // {path:"login",loadComponent:()=>import('./component/login/login').then(m=>m.Login)},
    {path:'form',loadComponent:()=>import('./component/form/form').then(m=>m.Form)},
    {path:'table',loadComponent:()=>import('./component/table/table').then(m=>m.Table)},
];
