import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class HeaderItem {

    private headerKey?: string;
    private headerItem?: string;
}

interface Header {

   readonly data: Array<HeaderItem>;
   readonly headerList: HeaderItem[];
}

@Component({

    selector: 'app-comm-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})

export class CommHeaderComponent implements OnInit {

    private headerList: HeaderItem[];
    private headerItem: Header;
    private headerTitle = '自助建站';

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.getHeaderList();
    }

    private getHeaderList(): void {

        this.http.get<Header>('http://localhost:3000/headers')
        .toPromise()
        .then((response) => {
            this.headerList = response.data;
        }).catch(err => console.log(err));
    }
}
