const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById
};

async function insert(user) {
    return db('users')
    .insert(user)
    .returning('id');
}

async function update(changes, id){ 
    return null;
}

function remove(id) {
    return null;
}

function getAll() {
    return db('users');
}

function findById(id) {
    return null;
}