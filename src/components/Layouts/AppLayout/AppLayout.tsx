import { NavLink, Outlet } from 'react-router-dom';
import { getMyData } from 'utils';

import { ReactComponent as ChatIcon } from 'assets/svg/chat_nav.svg';
import { ReactComponent as HomeIcon } from 'assets/svg/home.svg';
import { ReactComponent as ProfileIcon } from 'assets/svg/profile.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/searchbar.svg';
import { ReactComponent as UploadIcon } from 'assets/svg/upload.svg';
import * as S from './styles';

interface Props {
  navbar: boolean;
}

export const AppLayout = ({ navbar }: Props) => {
  const { myName } = getMyData();

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
    <S.AppContainer>
      <Outlet />
      {navbar && (
        <S.MainNavigation>
          {menuList.map((menu, i) => (
            <S.MenuItem key={i}>
              <NavLink
                to={menu.linkTo}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <div className="icon">{menu.component}</div>
                {menu.name && <span>{menu.name}</span>}
              </NavLink>
            </S.MenuItem>
          ))}
        </S.MainNavigation>
      )}
    </S.AppContainer>
  );
};
