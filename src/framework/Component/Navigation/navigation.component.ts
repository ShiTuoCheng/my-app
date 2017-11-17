import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface NavData {

    nav: Array<any>;
    navName: string;
}

@Component({
    selector: 'app-nav-component',
    templateUrl: './navigation.component.html'
})

export class NavigationComponent implements OnInit {

    private nav = [];
    private activeNav: any;
    private visibility;

    constructor(private router: Router, private http: HttpClient) {}

    ngOnInit() {
        this.initNavigation();
    }

    navSlide(act?: any): void {
        this.activeNav = act;
        if (act.href) {

            const str = act.href;
            this.router.navigate([str], { replaceUrl: true });
        }
    }

    subSlide(act?: any) {
        if (act.href) {

            const str = act.href;
            this.router.navigate([str], { replaceUrl: true });
        }
    }

    private initNavigation() {
        this.http.get<NavData>('../../assets/navigation.json')
            .toPromise()
            .then((res) => {
                this.nav = res.nav;
            });
    }
}
