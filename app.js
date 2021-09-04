const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postsRoutes = require('./routes/posts');
app.use('/posts', postsRoutes);                               // Middleware


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to Home!!!');
});




//  Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    () => {
        console.log('Connected to database');
    });


// Listen to PORT

app.listen(process.env.PORT || 3000);