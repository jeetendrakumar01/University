const multer = require('multer');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the destination folder for uploads
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Append timestamp to the original file name
    }
});

const upload = multer({ storage: storage });

// Upload endpoint
const uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'No file uploaded.' });
    }
    res.send({ message: 'File uploaded successfully.', file: req.file });
};

module.exports = { upload, uploadFile };
