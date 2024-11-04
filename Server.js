const express = require('express');
const app = express()
require('dotenv').config();
//using db object in node js file from db for mongoose connection
const db = require('./db');
const bodyparser = require('body-parser');
const personRouter = require('./routes/personRoutes');
const menuRouter = require('./routes/menuRouter')
app.use(bodyparser.json()); //req.body
// const person = require('./models/person');
// const menuItem = require('./models/menu');
const PORT = process.env.PORT || 3000;



//use the router : 
app.use('/person', personRouter);
app.use('/menuItem',menuRouter);


app.listen(PORT, ()=>{console.log('Server is listening on port 3000')})