const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgresql',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
