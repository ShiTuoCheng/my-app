import { Component, ElementRef, OnInit, AfterViewInit, Pipe, PipeTransform, NgModule, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SearchService} from '../../framework/Component/Search/search.component';
import { Router, RoutesRecognized, NavigationEnd, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { animate, trigger, state, style, transition, keyframes } from '@angular/animations';
import { CommHeaderComponent } from '../../framework/Component/Header/header.component';
import { LoadingComponent, LoadingService } from '../../framework/Component/Loading/loading.component';
declare var jquery: any;
declare var $: any;
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface NavData {

    nav: Array<any>;
    navName: string;
}

// @Pipe({ name: 'navFilter' })
// export class ArrayPipeComponent implements PipeTransform {
//     transform(value: any, ...args: any[]) {
//         const navArr = [];
//         value.forEach((e) => {
//             if (!(e instanceof Array)) {
//                 navArr.push(e);
//             }
//         });

//         return navArr;
//     }
// }

// @Pipe({ name: 'subFilter' })
// export class SubPipeComponent implements PipeTransform {
//     transform(value: any, ...args: any[]) {
//         const newArr = [];
//         value.forEach((e) => {
//             if ((e instanceof Array)) {
//                 newArr.push(e);
//             }
//         });

//         return newArr;
//     }
// }

@Component({

    selector: 'app-index-page',
    templateUrl: './index.page.html',
    animations: [
        // trigger(
        //     'visibility', [
        //         state('shown', style({
        //             height: '*'
        //         })),
        //         state('hidden', style({
        //             height: 0
        //         })),
        //         transition('hidden => shown', [
        //             animate('100ms ease-in-out')
        //         ])
        //     ]
        // )
        trigger('visibility', [
            transition(':enter', [style({ height: 0, overflow: 'hidden' }), animate('.2s ease', style({ height: '*' }))]),
            transition(':leave', [style({ height: '*', overflow: 'hidden' }), animate('.2s ease', style({ height: 0 }))])
        ])
    ]
})

export class IndexPageComponent implements OnInit, AfterViewInit {

    private viewMainHig: number;
    private viewHig: number;
    private nav = [];
    private activeNav: any;
    private visibility;
    private url: string;
    // page = '';

    constructor(
        private searchService: SearchService,
        private router: Router,
        private elementRef: ElementRef,
        private http: HttpClient,
        private activatedRoute: ActivatedRoute,
        private zone: NgZone,
        private loadingService: LoadingService
    ) {
        this.router.events.subscribe((url: any) => {});
    }

    ngAfterViewInit() {
        this.loadingService.show.emit(null);
    }

    ngOnInit() {
        this.setStyle();

        $('.if_nav_mainWrap').height($(window).height() - $('.bdHeader').height());
        // 初始化
        // this.router.config
        //     .filter((route) => route.data !== undefined)
        //     .forEach((e, index) => {
        //         this.nav.push(e.data.page);
        //         const child = e.children,
        //             subArr = [];

        //         if (child !== undefined) {
        //             child.forEach((e) => subArr.push(e.data.page));
        //             this.nav.push(subArr);
        //         }
        //     });
        this.http.get<NavData>('../../assets/navigation.json')
                 .toPromise()
                 .then((res) => {
                     this.nav = res.nav;
                 });
        // this.router
        //     .events
        //     .filter(event => event instanceof NavigationEnd)
        //     .map(() => {
        //         let child = this.activatedRoute.firstChild;
        //         while (child) {
        //             if (child.firstChild) {
        //                 child = child.firstChild;
        //             } else if (child.snapshot.data && child.snapshot.data['custom_data']) {
        //                 return child.snapshot.data['custom_data'];
        //             } else {
        //                 return null;
        //             }
        //         }
        //         return null;
        //     }).subscribe((customData: any) => {
        //         console.log(customData);
        //     });
    }

    signOut() {
        setTimeout(() => {
            this.router.navigate(['/login'], { replaceUrl: true });
        });
    }

    reloadPage() {

        this.url = this.router.url;

        this.router.navigate(['/11111'])
            .then(() => {
                this.router.navigate([this.url]);
            });
    }

    searchShow() {
        this.searchService.searchShow.emit(null);
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

    private setStyle(): void {

        this.viewMainHig = document.documentElement.clientHeight
         - this.choseDom('.bdHeader').offsetHeight
         - this.choseDom('.if_control').offsetHeight
         - this.choseDom('.if_copyright').offsetHeight;
    }

    private choseDom(dom: string): any {
        const selectedDom = this.elementRef.nativeElement.querySelector(dom);
        return selectedDom;
    }
}
