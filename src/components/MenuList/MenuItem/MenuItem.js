import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={props.item}>
        {props.title}
      </NavLink>
    </li>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string,
  item: PropTypes.string
};

export default MenuItem;
