import React from 'react';
import PropTypes from 'prop-types';

const Hello = (props) => {
  console.log(props);

  return <h3>Hello, {props.name}!</h3>;
};
Hello.propTypes = {
  name: PropTypes.string
};
export default Hello;
