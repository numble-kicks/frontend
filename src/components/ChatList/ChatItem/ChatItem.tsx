import { IChatUser } from 'types';
import { dateConverter } from 'utils/dateConverter';
import { ProfileImage } from 'components';
import * as S from './styles';

interface Prop {
  chatItem: IChatUser;
}

export const ChatItem = ({ chatItem }: Prop) => {
  const { sellerPhotoURL, sellerName, chats } = chatItem;

  return (
    <S.ChatItemContainer>
      <ProfileImage size="50" url={sellerPhotoURL} />
      <S.ChatPreview>
        <p className="chat_user">
          {sellerName}
          <span className="last_chatted_at">
            {dateConverter(chats[0].createAt || new Date())}
          </span>
        </p>
        <p className="last_content">{chats[0].content || ''}</p>
      </S.ChatPreview>
    </S.ChatItemContainer>
  );
};
