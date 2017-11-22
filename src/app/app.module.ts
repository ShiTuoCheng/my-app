// Lib
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 页
import { LoginPageComponent } from './login/login.page';

// 组件
import {
  TabControlService,
  PageBackComponent,
  PageCloseComponent,
  PageCloseOrBackComponent
} from '@framework/Component/TabControlBtn/tabControlBtn.component';
import { UploadImgComponent } from '@framework/Component/UploadImg/uploadImg.component';
import { LoadingService } from '@framework/Component/Loading/loading.component';
import { SearchService, SearchComponent } from '@framework/Component/Search/search.component';
import { CommHeaderComponent } from '@framework/Component/Header/header.component';
import { WeatherComponent } from '@framework/Component/Weather/weather.component';
import { TimeComponent } from '@framework/Component/Timer/time.component';

// Other
import { SettingsModule } from './index/index.route';
import { Handler } from '@framework/Utils/Handler';



@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}

@NgModule({
  declarations: [
    AppComponent,
    PageBackComponent,
    PageCloseComponent,
    PageCloseOrBackComponent,
    UploadImgComponent,
    LoginPageComponent,
    
  ],
  imports: [
    RouterModule.forRoot([
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
    ]),

    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SettingsModule
  ],
  providers: [
    TabControlService,
    Handler,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
