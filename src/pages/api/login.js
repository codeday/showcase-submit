/* eslint-disable no-console */
import auth0 from '../../lib/auth0';

/**
 * Logs the user in.
 *
 * @param {object} req The HTTP request.
 * @param {object} res HTTP response object.
 */
export default async function login(req, res) {
  try {
    await auth0.handleLogin(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
