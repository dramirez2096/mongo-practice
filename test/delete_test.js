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

    it('class method remove', (done) => { //removes several records at once
        User.remove({ name:'Joe' })
        .then(() => User.findOne({ name:'Joe'})) //checks to see if joe still exists
        .then((user) => {
            assert(user === null); // there should be no user
            done();
        });
    });

    it('class methond findOneAndRemove', (done) => {
        User.findOneAndRemove({ name:'Joe' }) //finds user with name of Joe
        .then(() => User.findOne({ name:'Joe'})) //checks to see if joe still exists
        .then((user) => {
            assert(user === null); // there should be no user
            done();
        });
    });

    it('class method findByIdAndRemove', (done) => {
        User.findByIdAndRemove(joe._id) //deletes user with same id as joe
        .then(() => User.findOne({ name:'Joe'})) //checks to see if joe still exists
        .then((user) => {
            assert(user === null); // there should be no user
            done();
        });
    });
});