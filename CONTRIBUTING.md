# Contributing Guide
Instructions for setting up build environment and contributing, for Linux only

## Setting up Development Environment
### Setting up Tesseract
The application uses the Tesseract API to detect text from images.

Installation of Tesseract requires Leptonica. To install Leptonica:
* Download the latest source package from the [website](https://leptonica.org)
* Extract the archive using the following command
```bash
tar -xvf (leptonica-packgage-name).tar.gz
```
* Configure the build, build the package and install using the following commands
```bash
cd (leptonica package name)
./configure
make
sudo make install
```
Now leptonica is installed and we can install tesseract:
* Clone the project from Github
```bash
git clone https://github.com/tesseract-ocr/tesseract.git
```
* Before building tesseract we will install a few dependencies:
```bash
sudo apt-get install g++ # or clang++ (presumably)
sudo apt-get install autoconf automake libtool
sudo apt-get install autoconf-archive
sudo apt-get install pkg-config
sudo apt-get install libpng12-dev
sudo apt-get install libjpeg8-dev
sudo apt-get install libtiff5-dev
sudo apt-get install zlib1g-dev
```
* We can now build and install Tesseract
```bash
cd tesseract
./autogen.sh
./configure
make
sudo make install
sudo ldconfig
```
We have now installed Tesseract, and can use it from the terminal with the `tesseract` command.

### Setting up GraphicsMagick
The application uses GraphicsMagic for some processing on the image before it is fed to tesseract.

* Download the latest package from the [website](http://www.graphicsmagick.org/download.html)
* Extract the package
```bash
tar -xvf (filename).tar.gz
```
* Build and install
```bash
cd (filename)
./configure
make
sudo make install
```
GraphicsMagick is now installed and ready to use

### Setting up NodeJS
The application itself is built using NodeJS.
There are two ways to install NodeJS
1. From NodeSource
* Add NodeJS 8.X repository
```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
```
* Then install it
```bash
sudo apt-get install nodejs npm
```
2. Build from source
* Clone the Node.js repo from Github
```bash
git clone https://github.com/nodejs/node.git
```
* Build and install system-wide
```bash
cd node
./configure
make -jX # X is number of concurrent compilation jobs
sudo make install
```
This will install NodeJS and npm(node package manager)

The build environment is now set up. You can run the app as follows:
### Installing npm Dependencies
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

## Contributing to the Project

### Reporting an Issue
Feel free to create an issue on the project repository. 

### Submitting changes/bug fixes
* Fork the repository to your Github account.
* Make changes locally and push them to the forked repository
* Send a pull request with the changes