import { Link, useNavigate } from 'react-router-dom';
import { ProfileImage, Loading } from 'components';
import { IUser } from 'types';

import * as S from './styles';

interface Props {
  isMyPage: boolean;
  userData: IUser | undefined;
}

export const ProfileHeader = ({ userData, isMyPage }: Props) => {
  const navigate = useNavigate();
  const domain =
    userData?.domain || userData?.name.toLowerCase().replace(/ /g, '');

  const logout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      sessionStorage.removeItem('kicks-user');
      navigate('/login');
    }
  };

  return (
    <S.Wrap>
      <ProfileImage size="100" url={userData?.photoURL || ''} />
      <div className="profile-username">
        <span>{userData?.name}</span>
      </div>
      <S.ProfileStats>
        <li>
          <strong className="profile-stat-value">0</strong>
          <span className="profile-stat-name">Videos</span>
        </li>
        <li>
          <Link to={`/profile/${domain}/followers`}>
            <strong className="profile-stat-value">0</strong>
            <span className="profile-stat-name">Followers</span>
          </Link>
        </li>
        <li>
          <Link to={`/profile/${domain}/followings`}>
            <strong className="profile-stat-value">0</strong>
            <span className="profile-stat-name">Followings</span>
          </Link>
        </li>
      </S.ProfileStats>
      {isMyPage ? (
        <S.Buttons>
          <button className="profile-btn">
            <Link to="/profile/edit">Edit</Link>
          </button>
          <button className="profile-btn" onClick={logout}>
            Logout
          </button>
        </S.Buttons>
      ) : (
        <S.Buttons>
          <button className="profile-btn">Follow</button>
          <button className="profile-btn">Message</button>
        </S.Buttons>
      )}
    </S.Wrap>
  );
};
