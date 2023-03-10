import { Link } from 'react-router-dom';
import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import { IUser } from 'types';
import * as S from './styles';

export const ChatButton = ({ userData }: { userData: IUser }) => {
  return (
    <S.Button>
      <Link to={`/chat/${userData.domain}`} state={userData}>
        <ChatIcon className="icon" />
      </Link>
    </S.Button>
  );
};
