import { initAuth0 } from '@auth0/nextjs-auth0';
import getConfig from 'next/config';

const { serverRuntimeConfig: config } = getConfig();

export default initAuth0({
  domain: config.auth0.domain,
  clientId: config.auth0.clientId,
  clientSecret: config.auth0.clientSecret,
  scope: config.auth0.scopes,
  audience: config.auth0.audience,
  redirectUri: `${config.app.url}/api/callback`,
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {
    cookieSecret: config.app.secret,
    cookieLifetime: 60 * 60 * 24,
    cookieSameSite: 'lax',
    storeIdToken: false,
    storeAccessToken: false,
    storeRefreshToken: false,
  },
});
