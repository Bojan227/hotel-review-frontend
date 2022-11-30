import { homeData, loggedOutUser, userLoggedIn, adminUser } from './navData';
import { NavigationLink } from './NavigationLink';
import useLogout from '../../hooks/useLogout';
import menu from './images/menu.png';
import close from './images/close.png';
import { v4 as uuidv4 } from 'uuid';
import './navigation.css';

import useUserContext from '../../hooks/useUserContext';
import { useState } from 'react';
export default function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const userContext = useUserContext();
  const { logout } = useLogout();

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
      <ul
        className={`navigation ${toggleMenu ? 'opened' : ''}`}
        onClick={() => setToggleMenu(false)}
      >
        {filterByRole.map((data) =>
          data.title === 'Favourites' &&
          userContext.user.role === 'admin' ? null : (
            <li
              key={uuidv4()}
              onClick={data.title === 'Logout' ? logout : undefined}
            >
              <NavigationLink {...data} />
            </li>
          )
        )}
        <div className="close-menu">
          <img src={close} alt="close-menu" />
        </div>
      </ul>
    </nav>
  );
}
