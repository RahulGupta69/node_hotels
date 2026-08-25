const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.DB_URL ;
// const mongoURL='mongodb+srv://rahulgupta69:9706129@cluster0.j4c9y5x.mongodb.net/';

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