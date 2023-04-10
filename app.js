import express from 'express';

const app = express();
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);
app.get('/hello', (req, res) => {
    res.send('Life is good!')
})
app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')
})
app.listen(4000);