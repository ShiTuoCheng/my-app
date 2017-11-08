/*
    开机 iScroll 滚动 指令
*/

import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appScrollDirective]'
})

export class ScrollDirective implements OnInit {

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {

        setTimeout(() => {
            const ele = this.elementRef.nativeElement;
        }, 0);
    }
}
