var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var ImageService = require('./ImageService');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//working
router.patch('/:imageId', function (req, res) {
    var imageServiceInst = new ImageService();
    return imageServiceInst.updateImage(req.params.imageId, req.body)
        .then((data) => {
            res.send({ "status": "SUCCESS",  message: "Image updated successfully" });
        })
        .catch((err) => {
            res.status(400).send({ status: "Failed" ,  message: "Image Couldn't be updated successfully", error: err});
        });
});

    //working
router.post('/', async function (req, res) {
    var imageServiceInst = new ImageService();
    req.userId = req.user.userId;
    req.publicKey = req.user.publicKey;
    return imageServiceInst.saveImage(req.body.propertyId, req.body, req.publicKey)
        .then((data) => {
            res.send({ "status": "SUCCESS" , message: "Image Saved Successfully", data});
        })
        .catch((err) => {
            console.log("Error in saveImage", err);
            res.status(400).send({ status: "Failed",  message: "Image Couldn't be saved successfully", error: err });
        });
});

 
router.get('/:imageId', async function (req, res) {
    var imageServiceInst = new ImageService();
    req.userId = req.user.userId;
    return imageServiceInst.getImage(req.params.imageId, req.user.publicKey)
    .then((data) => {
        res.send({ "status": "SUCCESS" , message: "Got image Details Successfully", data});
    })
    .catch((err) => {
        res.status(500).send({ status: "Failed",  message: "Image Details fetching error", error: err });
    });
})

module.exports = router;