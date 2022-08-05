const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

<<<<<<< HEAD
router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
=======
router.get('', function (req, res) {
    res.send('My first ever api!')
>>>>>>> b0f125d (second comment)
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