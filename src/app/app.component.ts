import { Component } from '@angular/core';
import { DataService } from './services/twitter-data.service';
import { SortDescriptor, State } from '@progress/kendo-data-query';
import { DataStateChangeEvent, RowArgs } from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    selectedRows: number[] = [];
    count: number;
    itemsPerPage = 10;
    sort: SortDescriptor[] = [{
        field: 'name',
        dir: 'asc'
    }, {
        field: 'description',
        dir: 'asc'
    }, {
        field: 'tenantName',
        dir: 'asc'
    }];
    data: any[] = [];

    state: State = {
        skip: 0,
        take: 5,

        // Initial filter descriptor
        filter: {
            logic: 'and',
            filters: []
        }
    };


    constructor(
        private dataService: DataService
    ) { }

    sortChange(sort: SortDescriptor[]): void {
        if (!sort[0].dir) {
            sort[0].dir = 'desc';
        }
        this.sort = sort;
        // this.loadServiceProviders(0);
    }
    dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        console.log('state', state.sort)
        // this.loadServiceProviders();
    }

    rowsSelectedKeys(context: RowArgs): number {
        return context.index;
    }



}
