import * as S from './styles';
import { AdBanner, ChatList } from 'components';

export const ChatListPage = () => {
  return (
    <S.Wrap>
      <S.PageTitle>Chat Room</S.PageTitle>
      <AdBanner
        height="100px"
        src="https://user-images.githubusercontent.com/68415905/224190549-b4bb8ef7-5330-4e86-bf60-383d8f13b74f.JPG"
        href="https://sugbo.ph/2020/sale-alert-50-off-on-nike-adidas/"
      />
      {<ChatList chatList={[]} />}
    </S.Wrap>
  );
};
