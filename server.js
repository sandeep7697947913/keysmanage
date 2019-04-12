const express = require('express');
var logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
var sesssion = require('express-session');
var cookieParser = require('cookie-parser');

const api = require('./server/routes/api');

const port = 3000;

const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 
app.use(cookieParser());
app.use(sesssion({secret:'sandeep',saveUninitialized:true,resave:true,cookie:{maxAge:900000}}));
app.use(cors());

app.use('/api',api);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'angfiles/index.html'));
});

app.listen(port,function(){
    console.log("listening on localhost: "+port);
});