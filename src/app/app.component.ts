import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoadingService } from './Component/Loading/loading.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadingService.show.emit(true);
  }
}
