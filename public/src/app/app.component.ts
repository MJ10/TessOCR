import { ImageService } from './image.service';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public imageService: ImageService, public el: ElementRef) { }

  upload() {
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    const fileCount = inputEl.files.length;
    const formData = new FormData();
    if (fileCount > 0) {
      formData.append('photo', inputEl.files.item(0));
      this.imageService.upload(formData).subscribe(res => {
        console.log(res);
      });
    }
  }

}
