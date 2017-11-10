import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherComponent } from '../Weather/weather.component';
import { TimeComponent } from '../Timer/time.component';
import { Utilities } from '../../Utils/Utli';

class HeaderItem {

    private itemTitle?: any;
    private itemKey?: String;
}

@Component({

    selector: 'app-comm-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.less']
})

export class CommFooterComponent implements OnInit {

    private ip?: string;
    private currentTime?: string;
    private location: '位置';
    private weatherState: '天气状态';
    private weatherTemp = '目前温度';
    constructor(private http: HttpClient) {

    }

    ngOnInit() {
    }
}
