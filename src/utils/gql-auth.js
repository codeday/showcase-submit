/* eslint-disable import/prefer-default-export */
import auth0 from '../lib/auth0';

/**
 * Forces the user to log in, and then sets an access token and user object for props.
 *
 * @param {object}
 * @returns {object} props
 */
export const getServerSideProps = async ({ req, res }) => {
  const session = await auth0.getSession(req);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/login',
    });
    res.end();
    return {};
  }

  const tokenCache = await auth0.tokenCache(req, res);
  const { accessToken } = await tokenCache.getAccessToken();
  return { props: { user: session.user, accessToken } };
};
