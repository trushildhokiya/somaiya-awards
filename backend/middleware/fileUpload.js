const multer = require('multer')
const path = require('path')

/**
 * NOTE: Uploads , storage 01-05 are used for form filling not for approvals
 * from 06- onwards they are approval handlers
 */

/**
 * SECTION FORM FILE UPLOAD HANDLER
 */

// file upload for outstanding institution form

const storage01 = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(req,file);
        cb(null, 'data/institution')

    },
    filename: (req, file, cb) => {
        console.log(req,file);
        cb(null, Date.now() + path.extname(file.originalname))
    }
})


const upload01 = multer({ storage: storage01 })



// file upload for research forms

const storage02 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'data/research')
    },
    filename: (req, file, cb) => {

        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload02 = multer({ storage: storage02 })



// file upload for sports forms

const storage03 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'data/sports')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload03 = multer({ storage: storage03 })



// file upload for teaching forms

const storage04 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'data/faculty')
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload04 = multer({ storage: storage04 })



// file upload for non teaching forms

const storage05 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'data/support')
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }

})

const upload05 = multer({ storage: storage05 })



/**
 * SECTION : IEAC FILE UPLOAD HANDLER
 */

// research form approval file handler
const storage06 = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'data/approvals/IEAC/research');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const upload06 = multer({storage: storage06});

module.exports = {
    upload01,
    upload02,
    upload03,
    upload04,
    upload05,
    upload06
}