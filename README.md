# TessOCR

TessOCR is a web based application, which recognizes text from images for the user. This is achieved using the Tesseract API. 

This application was built as a part of the recruitment process for the Web and App Development SIG of Web Club NITK

A live demo of the app can be found [here](https://tessocr.herokuapp.com)

The basic functionality of the application is demonstrated in [this video](https://drive.google.com/file/d/0B3aErC87s04CSHM2R0JNWVhLbFU/view?usp=sharing)

## Limitations
The accuracy of the application is limited by the underlying Tesseract Engine. Even though Tesseract is one of the most accurate OCR engines, it is not perfect. For example, if the image contains text in a font that is unrecognisable to Tesseract, the application fails to load a result. The application might also fail to produce an accurate result if the image contains text in different orientations. The prediction is also affected by the lighting and contrast in the image. 

## Usage
### Prerequisites
* `tesseract`
* `leptonica`
* `GraphicsMagick` 
* `node` with Angular CLI installed globally.
Detailed instructions on setting up the build environment can be found in the [CONTRIBUTING.md](https://github.com/MJ10/TessOCR/blob/master/CONTRIBUTING.md) file.
### Installing Dependencies
* Clone the repository to your machine.
* Run `npm install` in the root of the project.
* Change to `public` directory and build the Angular app. 
```bash
cd public
npm install
ng build --prod
```
This builds the Angular app in `/dist` directory.
### Running the Server
* To start the server run `npm start`.
* The app is now available at `http://localhost:8080`

## Contributing
The detailed instructions on how to contribute to the project can be found in the [CONTRIBUTING.md](https://github.com/MJ10/TessOCR/blob/master/CONTRIBUTING.md) file.

## License
This project is licensed under the [MIT License](https://github.com/MJ10/TessOCR/blob/master/LICENSE.md)