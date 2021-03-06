const mongoose = require('mongoose'); //allows us to use mongoose

const Schema = mongoose.Schema; //allows us to create schema for model

const UserSchema = new Schema({ //creating a new schema
    name: {
        type: String,
        validate: { //passes validate property
            validator: (name) => name.length > 2, //validator function
            message: 'Name needs to be longer than 2 characters' //message if record is invalid
        },
        required: [true, 'Name is required']
    }, //properties that each instance should include
    postCount: Number
});

const User = mongoose.model('user', UserSchema); //creating user model. 'user' names collection

module.exports = User; //exports "User" so other files can use it