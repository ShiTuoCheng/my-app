import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login.page';
import { AppComponent } from './app.component';
export const ROUNTES: Routes = [
    {
        path: '', component: AppComponent
    },
    {
        path: 'login', component: LoginPageComponent
    }
];
