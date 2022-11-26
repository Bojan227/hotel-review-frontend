import { homeData, loggedOutUser, userLoggedIn, adminUser } from './navData';
import { NavigationLink } from './NavigationLink';
import menu from './images/menu.png';
import close from './images/close.png';
import './navigation.css';

import useUserContext from '../../hooks/useUserContext';
import { useState } from 'react';
export default function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const userContext = useUserContext();

  const filterNavData = userContext.user
    ? homeData.concat(userLoggedIn)
    : homeData.concat(loggedOutUser);

  const filterByRole =
    userContext.user?.role === 'admin'
      ? filterNavData.concat(adminUser)
      : filterNavData;

  return (
    <nav className={toggleMenu ? 'opened' : ''}>
      <div onClick={() => setToggleMenu(true)} className="menu">
        <img src={menu} alt="menu" />
      </div>
      <ul className={`navigation ${toggleMenu ? 'opened' : ''}`}>
        {filterByRole.map((data) => (
          <li>
            <NavigationLink {...data} />
          </li>
        ))}
        <div onClick={() => setToggleMenu(false)} className="close-menu">
          <img src={close} alt="close-menu" />
        </div>
      </ul>
    </nav>
  );
}
