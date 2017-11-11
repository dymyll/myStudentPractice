//This will handle the schemas 

var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    buffID: String,
    firstName: String,
    lastName: String,
    test: String
});

//This tells mongoose to find studentPrac, execute the schema, and put it into database studentPrac
mongoose.model('studentPrac', studentSchema, 'studentPrac');