import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ProfileImage, Loading } from 'components';
import { IUserData } from 'types';

import * as S from './styles';

export const ProfileHeader = ({ userId }: { userId: number }) => {
  const [isMe, setIsMe] = useState(true);
  // const userData = data?.data as IUserData;
  const userData = JSON.parse(sessionStorage.getItem('kicks-user') || '');
  const navigate = useNavigate();

  const logout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      sessionStorage.removeItem('kicks-user');
      navigate('/login');
    }
  };

  // useEffect(() => {
  //   if (userData && userData.name === localStorage.getItem('name')) {
  //     setIsMe(true);
  //   }
  // }, [userData]);

  return (
    <S.Wrap>
      <ProfileImage size="100" url={userData.photoURL} />
      <div className="profile-username">
        <span>{userData.name}</span>
      </div>
      <S.ProfileStats>
        <li>
          <strong className="profile-stat-value">0</strong>
          <span className="profile-stat-name">Videos</span>
        </li>
        <li>
          <Link
            to={userData.followers ? `/${userData.name}/follower` : '#'}
            state={{ userId }}
          >
            <strong className="profile-stat-value">0</strong>
            <span className="profile-stat-name">Followers</span>
          </Link>
        </li>
        <li>
          <Link
            to={userData.followings ? `/${userData.name}/following` : '#'}
            state={{ userId }}
          >
            <strong className="profile-stat-value">0</strong>
            <span className="profile-stat-name">Followings</span>
          </Link>
        </li>
      </S.ProfileStats>
      {isMe ? (
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
