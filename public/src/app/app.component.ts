import { ImageService } from './image.service';
import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    image_url: String = '';
    result: String = '';

    constructor(public imageService: ImageService, public el: ElementRef) { }

    // Check if file is selected and then upload image
    upload() {
        const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
        const fileCount = inputEl.files.length;
        const formData = new FormData();
        if (fileCount > 0) {
            formData.append('photo', inputEl.files.item(0));
            this.imageService.upload(formData).subscribe(res => {
                if (res !== '') {
                    this.result = res;
                } else {
                    this.result = 'Could not Detect Text';
                }
            });
        }
    }

    // Display selected image
    displayImage(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.image_url = e.target.result;
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }

}
