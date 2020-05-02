module.exports = {
  serverRuntimeConfig: {
    auth0: {
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
      audience: process.env.AUTH0_AUDIENCE,
      scopes: process.env.AUTH0_SCOPES,
    },
    app: {
      url: process.env.APP_URL,
      secret: process.env.APP_SECRET,
    },
  },
};
