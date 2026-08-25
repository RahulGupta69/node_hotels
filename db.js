const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/rahulgupta';

mongoose.connect(mongoURL)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.log("MongoDB connection failed:", err);
    });
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('MongoDB connected successfully');
    })
db.on('error',(err)=>{
    console.log('MongoDB connection error:',err);
    })
db.on('disconnected',()=>{        
    console.log('MongoDB disconnected');
    })
module.exports=db;    