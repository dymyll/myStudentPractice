
//This is what renders the pages 

var express = require('express');
var router = express.Router();

var studentCtrl = require("../controllers/studentCtrl");





router.get('/add/:firstname/:lastname', studentCtrl.addstudent);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
router.get('/add-random-student', function(req, res, next){
    
    var rand = new Student(
        { 
            buffID:     '0123456',
            firstName:  'Random',
            lastName:   'Student'
        }
    );
    rand.save(function (err) {
        if (err) {
            console.log(err);
            res.send('There was an error');
        } else {
            var message = 'The student is saved in the db';
            console.log(message);
            res.send(message);
        }
        
    });
    
});
*/
/* GET home page. */

/*
router.get('/greeting', function(req, res, next){
   res.send("Hello, I greet you");
});

router.get('/greeting2', function(req, res, next){
   res.send("Hello, I greet you again");
});
*/
module.exports = router;