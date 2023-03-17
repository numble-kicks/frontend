import { ProfileImage } from 'components';

import dayjs from 'dayjs';
import { IChat } from 'types';
import { getMyData } from 'utils';

import * as S from './styles';

interface Prop {
  profile: string;
  message: IChat;
}

export const MessageItem = ({ profile, message }: Prop) => {
  const { userName, content, createAt } = message;
  const { myName } = getMyData();

  return userName === myName ? (
    <S.MessageItemContainer className="my-message">
      <span>{dayjs(createAt).format('h:mm A')}</span>
      <p>{content}</p>
    </S.MessageItemContainer>
  ) : (
    <S.MessageItemContainer>
      <ProfileImage size="35" url={profile} />
      <p>{content}</p>
      <span>{dayjs(createAt).format('h:mm A')}</span>
    </S.MessageItemContainer>
  );
};
