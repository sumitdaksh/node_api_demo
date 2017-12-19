var express = require('express');
var router = express.Router();
var userService = require('services/user.service');

router.get('/', getAll);
router.post('/create', create);
module.exports = router;

function getAll(req, res){
    userService.getAll()
    .then(function (user) {
        if (user) {
            // authentication successful
            res.send(user);
        } else {
            // authentication failed
            res.status(400).send("not found");
        }
    })
    .catch(function (err) {
        res.status(400).send(err);
    });

}


function create(req, res){
    userService.create(req.body)
    .then(function (user) {
        if (user) {
            // authentication successful
            res.send(user);
        } else {
            // authentication failed
            res.status(400).send("not found");
        }
    })
    .catch(function (err) {
        res.status(400).send(err);
    });

}
