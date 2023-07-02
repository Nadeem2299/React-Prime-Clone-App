// Functional Component with Arrow Function
// fn defn
// must return jsx
// export
import MenuItem from './MenuItem/MenuItem';

const MenuList = () => {
  const menuItems = [
    { key: 0, title: 'Home', to: '/' },
    { key: 1, title: 'Hoc Demo', to: '/hoc-demo' },
    { key: 2, title: 'About Us', to: '/about-us' },
    { key: 3, title: 'Contact Us', to: '/contact-us' },
    { key: 4, title: 'Hooks Demo', to: '/hooks-demo' },
    { key: 5, title: 'Shop', to: '/shop-page' },
    { key: 6, title: 'Gallery', to: '/gallery-page' }
  ];

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {menuItems.map((item) => (
        <MenuItem key={item.key} title={item.title} item={item.to} />
      ))}
    </ul>
  );
};

export default MenuList;
