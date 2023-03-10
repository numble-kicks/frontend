import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

import { ChatItem, EmptyChat } from 'components';
import { IChatUser } from 'types';

import * as S from './styles';

interface Prop {
  chatList: { [k: string]: IChatUser };
}

export const ChatList = ({ chatList }: Prop) => {
  const scrollbarRef = useRef(null);
  const sortByLatest = (a: Date, b: Date) => {
    return new Date(b).valueOf() - new Date(a).valueOf();
  };

  console.log(Object.values(chatList));

  return Object.values(chatList).length ? (
    <S.ChatListContainer>
      <Scrollbars autoHide ref={scrollbarRef}>
        {Object.values(chatList)
          .sort((a, b) =>
            sortByLatest(a.chats[0].createAt, b.chats[0].createAt)
          )
          .map(item => {
            const domain = item.sellerName.toLowerCase().replace(/ /g, '');
            return (
              <Link
                to={`/chat/${domain}`}
                key={item.id}
                state={{
                  id: item.id,
                  name: item.sellerName,
                  photoURL: item.sellerPhotoURL,
                  domain: domain
                }}
              >
                <ChatItem chatItem={item} />
              </Link>
            );
          })}
      </Scrollbars>
    </S.ChatListContainer>
  ) : (
    <EmptyChat />
  );
};
