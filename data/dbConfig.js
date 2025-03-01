const knex = require('knex');
const knexfile = require('../knexfile.js');

const environment = process.env.EB_ENV || "development";

module.exports = knex(knexfile[environment]);