const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const Password = require('../models/password');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const Cryptr = require('cryptr');
const jsonwebtokenizer = require('jsonwebtoken');
const db = "mongodb://localhost:27017/keysmanage";
const cryptr = new Cryptr('secretkey');
mongoose.Promise = global.Promise;

mongoose.connect(db,{useNewUrlParser:true,useCreateIndex:true},function(err){
//mongoose.connect(db,function(err){
    if(err){
        console.log("Error ! "+ err);
    }
});

function verifyToken(request,response, next){
    if(!request.headers.authorization) {
        return response.send("unauthorizerequest");
    }
    let token = request.headers.authorization.split(' ')[1];
    if (token==='null'){
        return response.send("unauthorizerequest");
    }
    let payload = jsonwebtokenizer.verify(token,'secretkey');
    if (!payload){
        return response.send("unauthorizerequest");
    }
    request.user = payload.subject;
    next()
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user : 'khemrajyadav.sy@gmail.com',
        pass : '7000073053'
    }
});

router.post('/updatepassword',verifyToken,function(request,response){
    user = request.user;
    bcrypt.compare(request.body.oldpass,user.password,function(err,same){
        if (err) throw err;
        if(same) {
            bcrypt.hash(request.body.newpass,10,function(err3,result){
                if (err3) throw err3;
                User.findOneAndUpdate({password:user.password},{password:result},function(err,res){
                    if (err) throw err;
                    response.send({status:"changed"});
                });
            });
        }else{
            response.send({status:"wrongpass"});
        }
    });
});

router.get('/getpasswords',verifyToken,function(request,response){
    console.log(request.user._id);
    Password.find({user_id:request.user._id },function(err,res){
        if (err) throw err;
        for (let obj of res) {
            obj.password = cryptr.decrypt(obj.password);
        }
        response.send(res);
    });
});

router.post('/insertpassword',verifyToken,function(request,response){
    var pass = new Password(request.body);
    pass._id = new mongoose.Types.ObjectId;
    pass.user_id = request.user._id;
    pass.password = cryptr.encrypt(pass.password);
    pass.save(function(err,doc){
        if(err)
         response.send(err);
        else 
        response.send(doc);
    });
});

router.get('/',function(req,res){
    res.send('api works');
});

router.post('/register',function(request,response){
    var mailOptions = {
        from: 'Keys Manager',
        to: request.body.email,
        subject: 'Successful Message',
        html: `<div style='margin:20px auto;width:80%;'>
        <div style='font-size:34px; padding:5px;text-align:center;background-color:#00cc00;border-radius:5px;color:white;'>
        Regitration Successfull !
        </div>
        <p style='padding-left:5%;'>Hi ${request.body.name},</p>
        <p style='padding-left:5%;'>Congratulations,Now you are the member of <b>keys mananger</b></p>
        <div style="font-size:34px; padding:5px;text-align:center;background-color:#33ccff;color:white;border-radius:10px;">
        Start Action
        </div>
        <p style='padding-left:5%;'>Visit us:-<br />
        <a href='http://localhost:4200/'>Click here</a>
        </p>
        <div style='padding-left:5%;'>
            Contact Us:-<br />
            <div>Phone:- 7697947913,7000073053</div>
            <div>Email:- sandeepyadav711.sy@gmail.com,sandeep7697947913@gmail.com</div>
        </div>
        </div>`
    }
    // transporter.sendMail(mailOptions,function(error, info){
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });
    let user = new User(request.body);
    user._id = new mongoose.Types.ObjectId();
    bcrypt.hash(user.password,10,function(err1,hash){
        if (err1) throw err1;
        user.password = hash;
        user.save(function(err2,doc){
            if (err2){
                if(err2.code==11000){
                    response.send("duplicate");
                }else{
                    response.send(err2);
                }
            }else{
                jsonwebtokenizer.sign({ subject : doc},'secretkey',function(err3,token){
                    if (err3) throw err3;
                    response.send({token});
                });
            }
        }); 
    });
});

router.post('/login',function(request,response){
    console.log(request.body.password);
    User.findOne({email:request.body.email},function(err,user){
        if (err) throw err;
        if(user){
            bcrypt.compare(request.body.password,user.password,function(err1,res){
                if (err1) throw err1;
                if(res){
                    jsonwebtokenizer.sign({subject: user},'secretkey',function(err2,token){
                        if (err2) throw err2;
                        response.send({token});
                    });
                }else{
                    response.send({token:"invalidcredential"});
                }
            });
        }else{
            response.send({token:"invalidcredential"});
        }
    });
});

module.exports = router;