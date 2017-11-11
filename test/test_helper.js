const mongoose = require('mongoose'); //allows us to use Mongoose

mongoose.Promise = global.Promise; //use Promise library to create promises

before((done) => {
    mongoose.connect('mongodb://localhost/users_test', {
        useMongoClient: true,
    }); //mongoose connects to local database "users_test"
    mongoose.connection
        .once('open', () => { done(); }) //run this function if mongoose connects
        .on('error', (error) => {
            console.warn('Warning', error); //run this function if mongoose does not connect
        });
}); //executed one time before all tests

    beforeEach ((done) => {
        mongoose.connection.collections.users.drop(() => {
            done(); //ready to run the next test
        });
    });//hook before each test
