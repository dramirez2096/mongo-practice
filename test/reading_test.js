const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        joe.save()
            .then(() => done());
    }); //checks to make sure user exists

    it('finds all users with the name of "Joe"', (done) =>{
        User.find({ name: 'Joe' }) //finds all objects with this property (name of Joe)
        .then((users) => {
            console.log(users);
            done();
        });
    });
});