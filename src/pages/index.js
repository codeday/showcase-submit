import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { getServerSideProps } from '../utils/gql-auth';

/**
 * Page which shows all the comments.
 *
 * @returns {string} JSX
 */
export default function Home({ user, accessToken }) {
  return (
    <div className="container">
      <Head>
        <title>CodeDay Showcase ~ Your Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{accessToken}</p>
    </div>
  );
}
Home.propTypes = {
  user: PropTypes.object.isRequired,
  accessToken: PropTypes.string.isRequired,
};

export { getServerSideProps };
