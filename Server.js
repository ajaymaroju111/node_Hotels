const express = require('express');
const app = express()
//using db object in node js file from db for mongoose connection
const db = require('./db');
const bodyparser = require('body-parser');
const personRouter = require('./routes/personRoutes');
const menuRouter = require('./routes/menuRouter')
app.use(bodyparser.json()); //req.body
// const person = require('./models/person');
// const menuItem = require('./models/menu');



//use the router : 
app.use('/person', personRouter);
app.use('/menuItem',menuRouter);


app.listen(3000, ()=>{console.log('Server is listening on port 3000')})