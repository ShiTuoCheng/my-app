import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {
  TabControlService,
  PageBackComponent,
  PageCloseComponent,
  PageCloseOrBackComponent
} from '../framework/Component/TabControlBtn/tabControlBtn.component';
import { UploadImgComponent } from '../framework/Component/UploadImg/uploadImg.component';
import { LoginPageComponent } from './login/login.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingService } from '../framework/Component/Loading/loading.component';
import { SearchService } from '../framework/Component/Search/search.component';
import { SearchComponent } from '../framework/Component/Search/search.component';
import { AppComponent } from './app.component';
import { SettingsModule } from './index/index.route';
import { CommHeaderComponent } from '../framework/Component/Header/header.component';
import { WeatherComponent } from '../framework/Component/Weather/weather.component';
import { TimeComponent } from '../framework/Component/Timer/time.component';
import { ROUNTES } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { Handler } from '../framework/Utils/Handler';

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
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUNTES),
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
