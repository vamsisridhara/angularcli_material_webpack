import { Directive, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[profile-image]',
    providers: [],
    // tslint:disable-next-line:use-host-property-decorator
    host: {
        '[src]': 'sanitizedImageData'
    }
})
export class ProfileImageDirective implements OnInit {
    // tslint:disable-next-line:no-input-rename
    @Input('profile-image') profileId: number;
    imageData: any;
    sanitizedImageData: any;
    constructor(private http: Http,
        private sanitizer: DomSanitizer) { }
    ngOnInit() {
        this.http.get('http://localhost/FileUploadWebAPIMVC5/api/image/bytearray')
            .map(image => image.text())
            .subscribe(data => {
                this.imageData = 'data:image/png;base64,' + data;
                this.sanitizedImageData = this.sanitizer.bypassSecurityTrustUrl(this.imageData);
            });
    }
}