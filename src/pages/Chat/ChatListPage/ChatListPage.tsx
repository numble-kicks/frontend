import * as S from './styles';
import useSWR from 'swr';
import { AdBanner, ChatList } from 'components';
import { CHAT_LIST_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import { IChatUser } from 'types';

export const ChatListPage = () => {
  const { data: chats } = useSWR(CHAT_LIST_API, fetcherWithToken);
  const chatData = chats?.data as IChatUser[];

  return (
    <S.Wrap>
      <S.PageTitle>채팅</S.PageTitle>
      <AdBanner
        height="100px"
        src="https://user-images.githubusercontent.com/68415905/224190549-b4bb8ef7-5330-4e86-bf60-383d8f13b74f.JPG"
        href="https://sugbo.ph/2020/sale-alert-50-off-on-nike-adidas/"
      />
      {chatData && <ChatList chatList={chatData} />}
    </S.Wrap>
  );
};
