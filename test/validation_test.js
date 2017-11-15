const assert = require('assert');
const User = require('../src/user');

describe('validate test', () => {
    it('require name', () => {
        const user = new User({ name: undefined }); //creating user with no name
        const validationResult = user.validateSync(); //validates user
        const { message } = validationResult.errors.name;

        assert(message === 'Name is required');
    });

    it('requires a name to be longer than 2 characters', () => {
        const user = new User ({name: 'Al'});
        const validationResult = user.validateSync();
        const {message} = validationResult.errors.name;

        assert(message === 'Name needs to be longer than 2 characters')
    });

    it('does not allow invalid records', (done) => {
        const user = new User ({name: 'Al'});
        user.save()
            .catch((validationResult) => {
                const {message} = validationResult.errors.name;

                assert(message === 'Name needs to be longer than 2 characters');
                done();
            })
    });
});