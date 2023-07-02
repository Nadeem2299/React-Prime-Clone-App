import React from 'react';
import PropTypes from 'prop-types';

const Bye = (props) => {
  console.log(props);

  return <h3>Bye, {props.name}</h3>;
};
Bye.propTypes = {
  name: PropTypes.string
};
export default Bye;
