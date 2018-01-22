
import { DashboardService } from './dashboard.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
@Component({
    templateUrl: './dashboard.component.html',
})
// https://stackoverflow.com/questions/45530752/getting-image-from-api-in-angular-4
export class DashboardComponent implements OnInit {
    imageToShow: any;
    isImageLoading = false;
    constructor(private dashService: DashboardService,
        private sanitizer: DomSanitizer) { }
    ngOnInit() {
        this.getImageFromService();
    }
    createImageFromBlob(image: Blob) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(reader.result);
        }, false);

        if (image) {
            reader.readAsDataURL(image);
        }
    }
    getImageFromService() {
        this.dashService.showProfilePicture().subscribe(data => {
            this.createImageFromBlob(data);
            this.isImageLoading = true;
        }, error => {
            this.isImageLoading = false;
            console.log(error);
        });
    }
}
