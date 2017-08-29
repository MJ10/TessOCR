import { ImageService } from './image.service';
import { Component, ElementRef } from '@angular/core';
import { MdDialog } from '@angular/material';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    image_url: String = '/assets/placeholder.jpg';
    result: String = '';

    constructor(public imageService: ImageService, public el: ElementRef, public dialog: MdDialog) { }

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

    viewAboutDialog() {
        this.dialog.open(AboutDialogComponent);
    }

}

@Component({
    selector: 'app-about-dialog',
    template: `
        TessOCR is a simple application which extracts text data from a given image.
        <h4>Libraries:</h4>
        <ul>
            <li><a href="https://www.npmjs.com/package/node-tesseract">node-tesseract</a></li>
            <li><a href="https://angular.io">Angular 4</a></li>
            <li><a href="https://www.npmjs.com/package/express">Express</a></li>
            <li><a href="https://www.npmjs.com/package/multer">multer</a></li>
            <li><a href="https://material.angular.io">Angular Material</a></li>
            <li><a href="https://www.npmjs.com/package/gm">gm</a></li>
        </ul>

        <h4>Software:</h4>
        <ul>
            <li><a href="https://github.com/tesseract-ocr/tesseract ">Tesseract OCR</a></li>
            <li><a href="https://graphicsmagick.org">GraphicsMagick</a></li>
        </ul>

        Made By: Moksh Jain
    `
})
export class AboutDialogComponent {}
