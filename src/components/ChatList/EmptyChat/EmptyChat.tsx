import { Link } from 'react-router-dom';
import * as S from './styles';

export const EmptyChat = () => {
  return (
    <S.EmptyChatContainer>
      <p>
        The chatroom is empty.
        <br />
        Have a chat with others.
      </p>
      <button>
        <Link to="/">Go to see items</Link>
      </button>
    </S.EmptyChatContainer>
  );
};
