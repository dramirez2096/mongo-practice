const assert = require('assert');
const User = require('../src/user');

describe('deleting a user', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({name: 'Joe'});
        joe.save()
            .then(() => done());
    });

    it('model instance remove', (done) => {
        joe.remove() //removes user joe
            .then(() => User.findOne({ name:'Joe'})) //checks to see if joe still exists
            .then((user) => {
                assert(user === null); // there should be no user
                done();
            });
    });

    it('class method remove', () => {

    });

    it('class methond findOneAndRemove', () => {

    });

    it('class method findByIdAndRemove', () => {

    });
});