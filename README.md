# TessOCR

TessOCR is a web based application, which recognizes text from images for the user. This is achieved using the Tesseract API. 

This application was built as a part of the recruitment process for the Web and App Development SIG of Web Club NITK

A live demo of the app can be found [here](https://tessocr.herokuapp.com)

## Usage
### Prerequisites
* `tesseract`
* `leptonica`
* `node`
* `GraphicsMagick` 
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