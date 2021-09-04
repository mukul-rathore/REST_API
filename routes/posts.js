const express = require('express');
const router = express.Router();

const Post = require('../models/Posts');


// Getting all post
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.jaon(err); 
    }
});


// Creating newPost
router.post('/',  async(req, res) => {
    // console.log(req.body);

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json(err);
    }

});


// Delete Post, Update etc...

module.exports = router;