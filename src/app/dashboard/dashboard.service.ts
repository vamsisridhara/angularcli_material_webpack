import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class DashboardService {
    constructor(private http: Http) { }
    showProfilePicture(): Observable<any> {
        return this.http.get('http://localhost/FileUploadWebAPIMVC5/api/image/bytearray',
            { responseType: ResponseContentType.Blob })
            .map((res: Response) => {
                return res.blob();
            });
    }
}
