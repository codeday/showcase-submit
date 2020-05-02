/* eslint-disable no-console */
import auth0 from '../../lib/auth0';

/**
 * Processes callback from auth0 login.
 *
 * @param {object} req The HTTP request.
 * @param {object} res HTTP response object.
 */
export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, { redirectTo: '/' });
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
