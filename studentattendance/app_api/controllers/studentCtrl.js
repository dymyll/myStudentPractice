//The controller contains the functins to run the actions of the page 

var mongoose = require("mongoose");
var Student = mongoose.model('studentPrac');

module.exports.addstudent = function(req, res, next){
    
//creates a variable called rand and makes it a new Student in the database hence Student connected to mongoose above
    var rand = new Student(
        { 
           //these are also and must be defined in the models
            buffID:     '0123456',
            firstName:  req.params.firstname,
            lastName:   req.params.lastname,
            test: 'this is a test'
        }
    );
    rand.save(function (err) {
        if (err) {
            console.log(err);
            res.send('There was an error');
        } else {
            //creates a variable called message
            var message = req.params.firstname + ' ' + 
                          req.params.lastname + ' is saved in the db';
            //tells console to write 'message' if no errors
            console.log(message);
            //in the 'addstudent.pug' defines what it should show
            res.render('addstudent', 
                { 
                    firstname: req.params.firstname,
                    lastname: req.params.lastname
                    
                }
            );
            //res.send(message);
        }
        
    });
    
};