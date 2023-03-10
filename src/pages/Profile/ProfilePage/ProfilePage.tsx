import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ProfileHeader, ProfileNavigation } from 'components';
import { findUser, getMyData } from 'utils';
import { IUser } from 'types';

import * as S from './styles';

export const ProfilePage = () => {
  const { username } = useParams();
  const { myData, myName } = getMyData();
  const [currentUser, setCurrentUser] = useState<IUser>();

  const isMyPage = username === (myName || '').toLowerCase().replace(/ /g, '');

  useEffect(() => {
    const fetcher = async () => {
      const userData = await findUser(username || '');
      setCurrentUser(isMyPage ? myData : userData);
    };
    fetcher();
  }, [isMyPage]);

  return (
    <S.Wrap>
      <ProfileHeader userData={currentUser} isMyPage={isMyPage} />
      <ProfileNavigation />
    </S.Wrap>
  );
};
