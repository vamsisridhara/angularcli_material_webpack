import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardEditComponent } from '../dashboard/dashboard-edit.component';
import { DashboardDetailComponent } from '../dashboard/dashboard-detail.component';
import { DashboardArchiveComponent } from '../dashboard/dashboard-archive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FileUploadCsvComponent } from '../file-upload-csv/file-upload-csv.component';
const dashboardRoutes: Routes = [
    { path: 'fileupload', component: FileUploadCsvComponent },
    { path: 'home', component: DashboardComponent },
    { path: 'edit', component: DashboardEditComponent },
    { path: 'archive', component: DashboardArchiveComponent },
    { path: 'detail', component: DashboardDetailComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
    imports: [
        // MaterialModule,
        BrowserAnimationsModule,
        CommonModule,
        RouterModule.forRoot(dashboardRoutes)
    ],
    exports: [
        RouterModule,
        // MaterialModule
    ],
    declarations: [
        DashboardComponent,
        DashboardEditComponent,
        DashboardArchiveComponent,
        DashboardDetailComponent,
        FileUploadCsvComponent
    ]
})
export class DashboardRoutingModule {

}
