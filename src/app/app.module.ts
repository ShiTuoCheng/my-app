import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoadingService, LoadingComponent} from './Component/Loading/loading.component';
import {
  TabControlService,
  PageBackComponent,
  PageCloseComponent,
  PageCloseOrBackComponent
} from './Component/TabControlBtn/tabControlBtn.component';
import { UploadImgComponent } from './Component/UploadImg/uploadImg.component';
import { LoginPageComponent } from './login/login.page';

import { AppComponent } from './app.component';
import { CommFooterComponent } from './Component/Footer/footer.component';
import { CommHeaderComponent } from './Component/Header/header.component';
import { WeatherComponent } from './Component/Weather/weather.component';
import { TimeComponent } from './Component/Timer/time.component';
// import { ROUNTES } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
export const ROUNTES: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'login', component: LoginPageComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    CommFooterComponent,
    CommHeaderComponent,
    WeatherComponent,
    TimeComponent,
    LoadingComponent,
    PageBackComponent,
    PageCloseComponent,
    PageCloseOrBackComponent,
    UploadImgComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUNTES)
  ],
  providers: [
    LoadingService,
    TabControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
