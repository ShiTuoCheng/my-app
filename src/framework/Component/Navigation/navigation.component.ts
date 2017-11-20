import { Component, OnInit, Input, EventEmitter, Injectable, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { animate, trigger, state, style, transition, keyframes } from '@angular/animations';
import { log } from 'util';

interface NavData {

    nav: Array<any>;
    navName: string;
}

@Injectable()
export class NavigationService {
    public navigationClick = new EventEmitter<any>();
}

@Pipe({name: 'navigationPipe'})
export class NavigationPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if (value) {
            return value.charAt(0);
        }
    }
}

@Component({
    selector: 'app-nav-component',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.less'],
    animations: [
        trigger('visibility', [
            transition(':enter', [style({ height: 0, overflow: 'hidden' }), animate('.2s ease', style({ height: '*' }))]),
            transition(':leave', [style({ height: '*', overflow: 'hidden' }), animate('.2s ease', style({ height: 0 }))])
        ]),

        trigger('miniMode', [
            state('false', style({width: '16%'})),
            state('true', style({width: '*'})),
            transition('true => false', animate('100ms ease-in-out'))
        ])
    ]
})
export class NavigationComponent implements OnInit {

    @Input() private nav = [];
    @Input() private miniMode: boolean;
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
