const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = () => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'db-postgresql-fra1-40846-do-user-10645723-0.b.db.ondigitalocean.com',
        port: '25060',
        database: 'defaultdb',
        username: 'doadmin',
        password: 'HRHRJxWC2tKTEo4u',
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {},
    },
  },
});