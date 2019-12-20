const Users = require('./usersModel.js');
const db = require('../data/dbConfig.js');

describe('users model', function() {
    beforeEach(async () => {
        await db('users').truncate();
    });
    describe('insert()', function() {
        it("should add the user to the database", async function() {
            await Users.insert({ name: "Jen", password: "pass"});
            await Users.insert({ name: "Keith", password: "pass"});

            const User =await db('users');
            expect(User).toHaveLength(2);
        });
    });
});
