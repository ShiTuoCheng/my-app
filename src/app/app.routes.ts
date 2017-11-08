import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login.page';
import { IndexPageComponent } from './index/index.page';
import { CommHeaderComponent } from './Component/Header/header.component';
import { AppComponent } from './app.component';
export const ROUNTES: Routes = [
    {
        path: 'index', component: IndexPageComponent
        , children: [
            {
                path: 'header',
                component: CommHeaderComponent,
                outlet: 'indexChildView'
            }
        ]
    },
    {
        path: '', redirectTo: '/index', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginPageComponent
    },
    {
        path: '**', redirectTo: '/index', pathMatch: 'full'
    }
];
