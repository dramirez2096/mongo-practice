const assert = require ('assert');
const User = require ('../src/user');

describe('Updating records', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({name: 'Joe'});
        joe.save()
            .then(() => done());
    });

    it('set and save test', (done) => {
        joe.set('name', 'David'); // sets joe's name to david
        joe.save()//saves joe

        .then(() => User.find({}))
        .then((users) => {
            assert(users.length === 1); //makes sure there is only one user
            assert(users[0].name === 'David'); //makes sure the first user's name is david
            done();
        });

    });
});