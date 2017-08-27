import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  constructor(public http: Http) { }

  upload(formData) {
    return this.http.post('http://localhost:3000/api/ocr', formData)
      .map(res => res.json());
  }

}
