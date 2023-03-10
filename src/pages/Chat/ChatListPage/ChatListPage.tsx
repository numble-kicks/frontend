import { AdBanner, ChatList } from 'components';
import { IChatUser } from 'types';
import * as S from './styles';

export const ChatListPage = () => {
  const chatList = JSON.parse(sessionStorage.getItem('chats') || '{}') as {
    [k: string]: IChatUser;
  };

  return (
    <S.Wrap>
      <S.PageTitle>Chat Room</S.PageTitle>
      <AdBanner
        height="100px"
        src="https://user-images.githubusercontent.com/68415905/224190549-b4bb8ef7-5330-4e86-bf60-383d8f13b74f.JPG"
        href="https://sugbo.ph/2020/sale-alert-50-off-on-nike-adidas/"
      />
      <ChatList chatList={chatList} />
    </S.Wrap>
  );
};
