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
            assert(users[0]._id.toString() === joe._id.toString()); //finds user with same string name as user above
            done();
        });
    });

    it('find user with a particular id', (done) => {
        User.findOne({ _id: joe._id }) //will find only one user named Joe with specific id
        .then((user) => {
            assert(user.name === 'Joe');
            done();
        });
    });
});