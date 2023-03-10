import { Link } from 'react-router-dom';
import { ProfileImage } from 'components';
import { IUser } from 'types';
import * as S from './styles';

interface Props {
  userData: IUser;
}

export const ProfileButton = ({ userData }: Props) => {
  const { photoURL, domain } = userData;

  return (
    <S.Button>
      <Link to={`/profile/${domain}`}>
        <ProfileImage size="48" url={photoURL} />
      </Link>
    </S.Button>
  );
};
