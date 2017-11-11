const mongoose = require('mongoose'); //allows us to use mongoose

const Schema = mongoose.Schema; //allows us to create schema for model

const UserSchema = new Schema({ //creating a new schema
    name:String //properties that each instance should include
});

const User = mongoose.model('user', UserSchema); //creating user model. 'user' names collection

module.exports = User; //exports "User" so other files can use it