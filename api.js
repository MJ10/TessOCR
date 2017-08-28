// Import required modules
const multer = require('multer');
const fs = require('fs');
const gm = require('gm');
const tesseract = require('node-tesseract');
const router = require('express').Router();

// Initilialize multer module to store
// uploaded images temporarily in temp folder.
const upload = multer({ dest: './temp/' }).single('photo');

// Define /api/ocr endpoint
router.post('/ocr', (req, res, next) => {
    let path = '';

    // Upload file to server
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return res.status(500).json("An error occured!");
        }
        // No error occured.
        path = req.file.path;

        // Image preprocessing
        gm(path)
            .monochrome() // Convert to b/w image
            .median(2) // Apply median filter to reduce background noise
            .write(path, (err) => {
                if (err) {
                    console.log(err);
                }
                // Detect text 
                tesseract.process(path, (err, text) => {
                    // Error while processing image
                    if (err) {
                        console.log(err);
                        return res.status(500).json('An error occured!')
                    } else {
                        // Delete image from temporary storage
                        fs.unlink(path, (err) => {
                            if (err) {
                                res.status(500).json('Error while scanning image!');
                            }
                        });
                        // return detected text
                        res.status(200).json(text);
                    }
                });

            })

    });
});

// export router
module.exports = router;
