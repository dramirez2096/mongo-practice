const assert = require ('assert');
const User = require ('../src/user');

describe('Updating records', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({name: 'Joe', postCount: 0});
        joe.save()
            .then(() => done());
    });

    function assertName(operation, done) {
        operation
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1); //makes sure there is only one user
                assert(users[0].name === 'David'); //makes sure the first user's name is david
                done();
            });
    }

    it('set and save test', (done) => {
        joe.set('name', 'David'); // sets joe's name to david
        assertName(joe.save(), done);//saves joe
    });

    it('model instance update test', (done) => { //only updates one instance
        assertName(joe.update({name: 'David'}), done); //update joe's name to david
    });

    it('model class update', (done) => {
        assertName (User.update ({ name:'Joe' }, {name:'David' }), done);
    });

    it('findOneAndUpdate', (done) => {
        assertName(User.findOneAndUpdate({name:'Joe'}, {name:'David'}), done);
    });

    it('findByIdAndUpdate', (done) => {
        assertName(User.findByIdAndUpdate(joe._id, {name:'David'}), done);
    });

    it('increment test', (done) => {
        User.update({ name: 'Joe' }, { $inc: {postCount: 1}})
            .then(() => User.findOne({name:'Joe'}))
            .then((user) => {
                assert(user.postCount === 1);
                done();
            })
    });
});
