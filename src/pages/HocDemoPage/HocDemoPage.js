import React from 'react';
import Hello from './Hello/Hello';
import Bye from './Bye/Bye';
import applyStyles from '../../hocs/applyStyles';
import { Helmet } from 'react-helmet-async';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {
  return (
    <>
      <Helmet>
        <title>Prime Video | About Us</title>
      </Helmet>
      <h2>Hoc Demo</h2>

      <StyledHello name="John" />
      <StyledBye name="John" />
    </>
  );
};

export default HocDemoPage;
