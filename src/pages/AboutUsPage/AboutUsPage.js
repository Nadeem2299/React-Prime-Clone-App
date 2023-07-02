import React from 'react';
import { Helmet } from 'react-helmet-async';
import MarkFragment from './MarkFragment/MarkFragment';

const AboutUsPage = () => {
  const feature = 'React advanced concepts';
  return (
    <>
      <Helmet>
        <title>Prime Video | About Us</title>
      </Helmet>
      <p>About Us Page</p>
      <MarkFragment>
        <p>wow</p>
        <p>How are you?</p>
      </MarkFragment>
      p{feature}
    </>
  );
};

export default AboutUsPage;
