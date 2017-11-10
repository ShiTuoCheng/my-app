import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './index.page';

import { SearchService } from '../../framework/Component/Search/search.component';
import { SearchComponent } from '../../framework/Component/Search/search.component';
import { AppComponent } from '../app.component';
import { CommFooterComponent } from '../../framework/Component/Footer/footer.component';
import { CommHeaderComponent } from '../../framework/Component/Header/header.component';
import { WeatherComponent } from '../../framework/Component/Weather/weather.component';
import { TimeComponent } from '../../framework/Component/Timer/time.component';
import {
    LoadingComponent,
    LoadingService
} from '../../framework/Component/Loading/loading.component';

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
