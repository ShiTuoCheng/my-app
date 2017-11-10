import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './index.page';

import { SearchService } from '../Component/Search/search.component';
import { SearchComponent } from '../Component/Search/search.component';
import { AppComponent } from '../app.component';
import { CommFooterComponent } from '../Component/Footer/footer.component';
import { CommHeaderComponent } from '../Component/Header/header.component';
import { WeatherComponent } from '../Component/Weather/weather.component';
import { TimeComponent } from '../Component/Timer/time.component';
import {
    LoadingComponent,
    LoadingService
} from '../Component/Loading/loading.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: IndexPageComponent,
        children: [
            { path: 'header', component: CommHeaderComponent }
        ]
    }
];

@NgModule({
    declarations: [
        IndexPageComponent,
        CommHeaderComponent,
        WeatherComponent,
        TimeComponent,
        SearchComponent,
        LoadingComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    providers: [
        SearchService,
        LoadingService
    ],
    exports: [
        LoadingComponent
    ]
})
export class SettingsModule { }
