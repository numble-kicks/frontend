import { useState } from 'react';
import { Link } from 'react-router-dom';

import { getMyData } from 'utils';
import { ReactComponent as ChatIcon } from 'assets/svg/chat_nav.svg';
import { ReactComponent as HomeIcon } from 'assets/svg/home.svg';
import { ReactComponent as ProfileIcon } from 'assets/svg/profile.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/searchbar.svg';
import { ReactComponent as UploadIcon } from 'assets/svg/upload.svg';
import * as S from './styles';

export const Navbar = () => {
  const [active, setActive] = useState<string>('home');
  const { myName } = getMyData();

  const handleClick = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLLIElement;
    setActive(target.id);
    console.log(target, active);
  };

  const menuList = [
    { name: 'HOME', linkTo: '/', component: <HomeIcon /> },
    { name: 'SEARCH', linkTo: '/search', component: <SearchIcon /> },
    { name: '', linkTo: '/upload', component: <UploadIcon /> },
    { name: 'CHAT', linkTo: '/chats', component: <ChatIcon /> },
    {
      name: 'PROFILE',
      linkTo: `/profile/${myName.toLowerCase().replace(/ /g, '')}`,
      component: <ProfileIcon />
    }
  ];

  return (
    <S.MainNavigation>
      {menuList.map((menu, i) => (
        <S.MenuItem
          key={i}
          onClick={e => handleClick(e)}
          className={active === menu.name.toLowerCase() ? 'active' : ''}
          id={menu.name.toLowerCase()}
        >
          <Link to={menu.linkTo}>
            <div className="icon">{menu.component}</div>
            {menu.name && <span>{menu.name}</span>}
          </Link>
        </S.MenuItem>
      ))}
    </S.MainNavigation>
  );
};
