import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login.page';
import { AppComponent } from './app.component';
export const ROUNTES: Routes = [
    {
        path: 'index', loadChildren: '../app/index/index.route#SettingsModule'
    },
    {
        path: 'login', component: LoginPageComponent
    },
    {
        path: '**', redirectTo: '/index', pathMatch: 'full'
    },
    {
        path: '', redirectTo: '/index', pathMatch: 'full'
    }
];
