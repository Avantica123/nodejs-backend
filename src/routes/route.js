const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const wel=require("../logger/logger");
const info=require("../util/helper");
const infodata=require("../validater/Formatter");



router.get('/test-me', function (req, res) {
 
    wel.wel();
    info.datename()
    info.monthname()
    info.batchname()
    infodata.strims()
    infodata.lowercase()
    infodata.uppercase()

    res.send('My second ever api!')});

router.get('', function (req, res) {
    res.send('My first ever api!')

});
router.get('/login', function (req, res) {
    res.send('My login page ok')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason