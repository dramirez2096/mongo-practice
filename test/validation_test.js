const assert = require('assert');
const User = require('../src/user');

describe('validate test', () => {
    it('require name', () => {
        const user = new User({ name: undefined }); //creating user with no name
        const validationResult = user.validateSync(); //validates user
        const { message } = validationResult.errors.name;

        assert(message === 'Name is required');
    });
});