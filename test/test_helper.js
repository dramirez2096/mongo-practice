const mongoose = require('mongoose'); //allows us to use Mongoose

mongoose.connect('mongodb://localhost/users_test'); //mongoose connects to local database "users_test"
mongoose.connection
    .once('open', () => console.log('Awesome its working!')) //run this function if mongoose connects
    .on('error', (error) => {
        console.warn('Warning', error); //run this function if mongoose does not connect
    });
