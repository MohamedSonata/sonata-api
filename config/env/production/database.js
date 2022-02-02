const parse = require('pg-connection-string').parse;
const config = parse('postgresql://doadmin:HRHRJxWC2tKTEo4u@db-postgresql-fra1-40846-do-user-10645723-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require');

module.exports = () => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {},
    },
  },
});