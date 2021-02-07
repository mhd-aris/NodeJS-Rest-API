const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const rplRoute = require('./routes/rpl');
const app = express();


dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
    app.listen(3000,()=> console.log('Server up and running...'));
});

    

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/rpl',rplRoute);

