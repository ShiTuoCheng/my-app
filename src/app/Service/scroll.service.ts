import {Injectable, OnInit} from '@angular/core';
import BScroll from 'better-scroll';

@Injectable()
export class ScrollService implements OnInit {
    private ele?: any;
    private scroll?: any;

    ngOnInit() {

        setTimeout(() => {
            this.scroll = new BScroll(this.ele, {
                scrollY: true
            });
        }, 0);
    }
}
