// Create web server

// Import express
var express = require('express');
var router = express.Router();

// Import model
var model = require('../models/comments');

// Get list comments
router.get('/', function (req, res) {
    model.getListComments(function (data) {
        res.json(data);
    })
});

// Get comment by id
router.get('/:id', function (req, res) {
    var id = req.params.id;
    model.getCommentById(id, function (data) {
        res.json(data);
    })
});

// Add new comment
router.post('/', function (req, res) {
    var comment = req.body;
    model.addNewComment(comment, function (data) {
        res.json(data);
    })
});

// Update comment
router.put('/:id', function (req, res) {
    var id = req.params.id;
    var comment = req.body;
    model.updateComment(id, comment, function (data) {
        res.json(data);
    })
});

// Delete comment
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    model.deleteComment(id, function (data) {
        res.json(data);
    })
});

module.exports = router;