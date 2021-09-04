const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


// Middleware
app.use('/posts', ()=> {
    console.log('This is middleware Running!')
})


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to Home!!!');
});
app.get('/posts', (req, res) => {
    res.send('Welcome to Posts!!!');
});



//  Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    () => {
        console.log('Connected to database');
    });


// Listen to PORT

app.listen(process.env.PORT || 3000);