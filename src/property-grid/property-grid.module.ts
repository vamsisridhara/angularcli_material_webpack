import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ChartsModule } from 'ng2-charts';

import { PropertyGridComponent } from "property-grid/propertygrid.component";
import { PropertyListComponent } from "property-grid/property-list.component";
import { ServerPagingComponent } from "property-grid/external-paging.component";
import { MockServerResultsService } from "service/mock.service";
import { DoughnutComponent } from "property-grid/doughnut.component";
import { LinechartComponent } from "property-grid/linechart.component";
import {
    MaterialModule,
    MdSelectModule,
    MdRadioModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRippleModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdSnackBar
} from '@angular/material';
import { CdkTableModule } from "@angular/cdk";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        NgxDatatableModule,
        ChartsModule,
        MaterialModule,
    ],
    declarations: [
        PropertyGridComponent,
        PropertyListComponent,
        ServerPagingComponent,
        DoughnutComponent,
        LinechartComponent
    ],
    exports: [
        PropertyGridComponent,
        PropertyListComponent,
        ServerPagingComponent,
        DoughnutComponent,
        LinechartComponent,
        MaterialModule,
        CdkTableModule,
        MdAutocompleteModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        MdChipsModule,
        MdCoreModule,
        MdDatepickerModule,
        MdDialogModule,
        MdExpansionModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdMenuModule,
        MdNativeDateModule,
        MdPaginatorModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        MdRadioModule,
        MdRippleModule,
        MdSelectModule,
        MdSidenavModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdSortModule,
        MdTableModule,
        MdTabsModule,
        MdToolbarModule,
        MdTooltipModule,
        MdSelectModule,
        MdRadioModule,
    ]
})
export class PropertyGridModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PropertyGridModule,
            providers: [
                MockServerResultsService
            ]
        }
    }
}