var _ = require('lodash');
var Q = require('q');
var User = require('models/user');
var mongoose = require('mongoose');
var config = require('config.json');



mongoose.connect(config.connectionString, {
  useMongoClient: true
});

var service = {}
service.getAll = getAll;
service.create = create;

module.exports = service;

function getAll() {
    var deferred = Q.defer();

   User.find({},function (err, users) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        // return users (without hashed passwords)
        users = _.map(users, function (user) {
            return _.omit(user, 'hash');
        });

        deferred.resolve(users);
    });

    return deferred.promise;
}



// create user
function create(params) {
    var deferred = Q.defer();
    var user = params;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    // if (userParam.email){
    //     user.email = userParam.email.toLowerCase() 
    // }
    console.log("hello")
    console.log(params)

    user =  new User(user);
    user.save(function (err,user) {
            if (err) deferred.reject(err);

            deferred.resolve(user);
        });

    // validation


    return deferred.promise;
}
