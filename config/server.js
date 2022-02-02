module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['dt3y1/02KoyaSk6cmdO0qg==','mb81hKDJsGXoyY/5J2Esgg=='],
  },
});
