import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterPrimengAppSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';

import {ButtonModule} from 'primeng/button';

import {DataTableModule} from 'primeng/datatable';

import {InputTextModule} from 'primeng/inputtext';

@NgModule({
    imports: [
        JhipsterPrimengAppSharedModule,
        RouterModule.forChild([ HOME_ROUTE ]),
        ButtonModule,
        DataTableModule,
        InputTextModule
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterPrimengAppHomeModule {}
