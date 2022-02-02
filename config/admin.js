module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a59b88bc71219aeb7bc72b57865ebf79'),
  },
});
