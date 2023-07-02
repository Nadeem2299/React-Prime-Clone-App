// functional component with named function
//  import (optional)
// must return jsx
//  export
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import MenuList from '../MenuList/MenuList';

function Header (props) {
  const cart = useContext(CartContext);
  return (
    <header>
      <nav
        className="navbar navbar-expand-md navbar-dark fixed-top"
        style={{ backgroundColor: [props.navBgColor] }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Prime Video App!
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <MenuList />
            {/* <MenuList/> */}
            <div className="d-flex">
              <button className="btn btn-danger" type="submit">
                Cart ({cart.cartState?.length === undefined ? '0' : cart.cartState?.length})
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
Header.propTypes = {
  navBgColor: PropTypes.string
};

export default Header;
