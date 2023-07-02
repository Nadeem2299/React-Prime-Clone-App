/*
* imports
* comp def
   - must return JSX
* exprts
*/
import MenuList from '../MenuList/MenuList';

const Footer = function () {
  const copyrightYear = 2023;
  const developerName = 'Nadeem';

  return (
    <footer className="text-center mt-5">
      <hr />
      <MenuList />
      <hr />
      <p>
        Copyright {copyrightYear} | {developerName}
      </p>
    </footer>
  );
};

export default Footer;
