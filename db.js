const mongoose = require('mongoose');
require('dotenv').config();

//Define the MongoDB connection URL : 
// const mongoURL = process.dotenv.MONOGODB_URL_LOCAL; //Replace Databases with your databases name : 
const mongoURL = process.env.MONOGODB_URL;

//set up mongoDB connection : 
mongoose.connect(mongoURL,{
    // useNewUserParser : true,
    // useUnifiedTopology : true
})

//Acess the default connection object : 
const db = mongoose.connection;

// Define event listener using default object: 
db.on('connected', ()=>{
    console.log('connected to mongodb Server');
})
db.on('error', (err)=>{
    console.log('mongodb connection error : '+ err);
})
db.on('disconnected', ()=>{
    console.log(' mongodb Server disconnected');
})

// export the database connection : .
module.exports = db;
