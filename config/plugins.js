module.exports = {
  upload: {
    config: {
      provider: "strapi-provider-upload-dos",
      providerOptions: {
        key: process.env.example.DO_SPACE_ACCESS_KEY,
        secret: process.env.example.DO_SPACE_SECRET_KEY,
        endpoint: process.env.example.DO_SPACE_ENDPOINT,
        space: process.env.example.DO_SPACE_BUCKET,
        directory: process.env.example.DO_SPACE_DIRECTORY
      },
    },
  },
};