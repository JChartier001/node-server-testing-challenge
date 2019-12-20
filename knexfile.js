// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/users.db3'
    },
    useNullAsDefault: true,
    migration: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3'
    },
    useNullAsDefault: true,
    migration: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
  },
  
  production: {
    client: 'pg',
    connection:process.env.DATABASE_URL,
    migration: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
  },
};
