const express = require('express');
const tesseract = require('node-tesseract');
const cors = require('cors');
// const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

let app = express();

app.use(express.static('dist'));

app.use(cors());

const upload = multer({ dest: './temp/' }).single('photo');


const process = (req, res) => {

    // console.log(req)

    let path = '';
    upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
        // No error occured.
        path = req.file.path;

        tesseract.process(path, (err, text) => {
            if (err) {
                console.log(err);
            } else {
                fs.unlink(path, (err) => {
                    if (err) {
                        res.status(500).json('Error while scanning image!');
                    }
                    console.log('Successfully removed %s', path);
                })

                res.status(200).json(text);
            }
        });
    });
}

app.post('/api/ocr', process);

var port = 3000;

app.listen(port, () => {
    console.log("Listening on port ", port);
})