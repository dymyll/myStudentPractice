//This connects to the database in mlabs

var mongoose = require('mongoose');

var connectionstring = "mongodb://dymyll:Prince2410@ds249545.mlab.com:49545/mypracdb";
mongoose.connect(connectionstring, { useMongoClient: true });

mongoose.Promise = global.Promise;


//Bring in the schemas & models

require('./studentmodel.js')