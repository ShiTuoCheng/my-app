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
import { IndexPageComponent, ArrayPipeComponent, SubPipeComponent } from './index/index.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollDirective } from '../app/Directive/scroll.directive';

import { SearchService } from './Component/Search/search.component';
import { SearchComponent } from './Component/Search/search.component';
import { AppComponent } from './app.component';
import { CommFooterComponent } from './Component/Footer/footer.component';
import { CommHeaderComponent } from './Component/Header/header.component';
import { WeatherComponent } from './Component/Weather/weather.component';
import { TimeComponent } from './Component/Timer/time.component';
import { ROUNTES } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
// export const ROUNTES: Routes = [
//   {
//     path: '', component: AppComponent
//   },
//   {
//     path: 'login', component: LoginPageComponent
//   }
// ];
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
    LoginPageComponent,
    IndexPageComponent,
    SearchComponent,
    ArrayPipeComponent,
    SubPipeComponent,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUNTES),
    BrowserAnimationsModule
  ],
  providers: [
    LoadingService,
    TabControlService,
    SearchService,
    ArrayPipeComponent,
    SubPipeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
