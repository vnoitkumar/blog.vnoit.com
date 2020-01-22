/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          profileUrl
        }
      }
    }
  `);

  const { author, profileUrl } = data.site.siteMetadata;
  return (
    <div
      style={{
        marginBottom: rhythm(2.5)
      }}
    >
      <p style={{ margin: 0 }}>
        <a
          target="_blank"
          rel="nofollow noreferrer noopener"
          aria-label="VnoitKumar"
          href={profileUrl}
        >
          <strong>{author}</strong>
        </a>
      </p>
      <p style={{ margin: 0 }}>Learning / Relearning JavaScript</p>
    </div>
  );
};

export default Bio;
