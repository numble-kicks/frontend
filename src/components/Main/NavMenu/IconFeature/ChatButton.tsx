import { Link } from 'react-router-dom';
import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import * as S from './styles';

export const ChatButton = ({ userId }: { userId: number }) => {
  return (
    <S.Button>
      <Link to={`/chat/${userId}`}>
        <ChatIcon className="icon" />
      </Link>
    </S.Button>
  );
};
