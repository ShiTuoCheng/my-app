import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../Loading/loading.component';

interface IP {
    ip: string;
}

interface Weather {

    HeWeather5: Array<any>;
    now: any;
    cond: any;
    tmp: number;
    basic: any;
    city: string;
    country: string;
}

@Component({

    selector: 'app-comm-weather',
    template: '<div class="weatherDiv">{{location}} | {{weatherState}} | {{weatherTemp}}</div>',
    styles: ['div.weatherDiv {' +
                'color: #fc6719;' +
                'display: inline-block;' +
                'margin: 0 auto}'
    ]
})

export class WeatherComponent implements OnInit, AfterViewInit {

    private ip?: string;
    private location: '位置';
    private weatherState: '天气状态';
    private weatherTemp: String = '目前温度';

    constructor(private http: HttpClient, private loadingService: LoadingService, private elmentRef: ElementRef) {

    }

    ngOnInit() {
        this.getWeatherInfo();
    }

    ngAfterViewInit() {
        this.loadingService.show.emit(null);
    }

    private getWeatherInfo(): void {

        this.http.get<IP>('http://jsonip.com/?callback=')
            .toPromise()
            .then((response) => {

                this.ip = response.ip as string;
            })
            .then(() => {

                this.http.get<Weather>(`https://free-api.heweather.com/v5/now?city=${this.ip}&key=56cb41b979f944b58c96e98c457a2f5b`)
                    .toPromise()
                    .then((response) => {

                        this.location = response.HeWeather5[0].basic.city;
                        this.weatherState = response.HeWeather5[0].now.cond.txt;
                        this.weatherTemp = response.HeWeather5[0].now.tmp as string + '℃';

                        this.loadingService.hide.emit(null);
                    });
            })
            .catch((err: Error) => {

                console.log('出错啦' + err);
                this.loadingService.hide.emit(null);
                this.elmentRef.nativeElement.querySelector('.weatherDiv').style.display = 'none';
            });
    }
}
