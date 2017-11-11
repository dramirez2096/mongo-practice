const assert = require('assert');//imports assertion library so you can make an assertion
const User = require('../src/user')

describe('Creating records', () => { //'Creating records describes the test
    it('saves a user', () => { //'saves a user' describes the test
        const joe = new User({ name: 'Joe' }) //function creates a new user instance named Joe

        joe.save(); //saves joe to database6
    });
});