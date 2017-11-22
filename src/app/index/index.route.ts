import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent, } from './index.page';

import { SearchService } from '@framework/Component/Search/search.component';
import { SearchComponent } from '@framework/Component/Search/search.component';
import { CommHeaderComponent } from '@framework/Component/Header/header.component';
import { WeatherComponent } from '@framework/Component/Weather/weather.component';
import { TimeComponent } from '@framework/Component/Timer/time.component';
import { NavigationComponent, NavigationService, NavigationPipe } from '@framework/Component/Navigation/navigation.component';
import {
  LoadingComponent,
  LoadingService
} from '@framework/Component/Loading/loading.component';
import { ScrollDirective } from '@framework/Directive/scroll.directive';

// export const ROUTES: Routes = ;

@NgModule({
  declarations: [
    IndexPageComponent,
    CommHeaderComponent,
    WeatherComponent,
    TimeComponent,
    SearchComponent,
    LoadingComponent,
    NavigationComponent,
    NavigationPipe,
    ScrollDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: IndexPageComponent,
        children: [
          { path: 'header', component: CommHeaderComponent }
        ]
      }
    ])
  ],
  providers: [
    SearchService,
    LoadingService,
    NavigationService
  ],
  exports: [
    LoadingComponent
  ]
})
export class SettingsModule { }
