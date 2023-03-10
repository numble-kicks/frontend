import { ChatButton, LikeButton, ProfileButton } from '../IconFeature';
import { IVideoItem } from 'types';
import * as S from './styles';

interface Prop {
  videoData: IVideoItem;
  isShown: boolean;
}

export const UserVideoNav = ({ isShown, videoData }: Prop) => {
  const { like_count, user, id } = videoData;

  return (
    <S.Wrap isShown={isShown}>
      <ProfileButton userData={user} />
      <LikeButton videoId={id} like_count={like_count} />
      <ChatButton userId={user?.id} />
    </S.Wrap>
  );
};
