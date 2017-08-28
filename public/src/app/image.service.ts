import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

    constructor(public http: Http) { }

    // Make post request to server with image embedded in formData
    upload(formData) {
        return this.http.post('/api/ocr', formData)
            .map(res => res.json());
    }

}
