import { Component, OnInit, Input, EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { animate, trigger, state, style, transition, keyframes } from '@angular/animations';

interface NavData {

    nav: Array<any>;
    navName: string;
}



@Injectable()
export class NavigationService {
    public navigationClick = new EventEmitter<any>();
}

@Component({
    selector: 'app-nav-component',
    templateUrl: './navigation.component.html',
    animations: [
        trigger('visibility', [
            transition(':enter', [style({ height: 0, overflow: 'hidden' }), animate('.2s ease', style({ height: '*' }))]),
            transition(':leave', [style({ height: '*', overflow: 'hidden' }), animate('.2s ease', style({ height: 0 }))])
        ])
    ]
})

export class NavigationComponent implements OnInit {

    @Input() private nav = [];
    private activeNav: any;
    private visibility;

    constructor(private router: Router, private http: HttpClient, private navigationService: NavigationService) {}

    ngOnInit() {
    }

    navSlide(act?: any): void {
        this.activeNav = act;
        if (act.href) {

            const str = act.href;
            this.navigationService.navigationClick.emit(str);
        }
    }

    subSlide(act?: any) {
        if (act.href) {

            const str = act.href;
            this.navigationService.navigationClick.emit(str);
        }
    }
}
