import React, { useState } from 'react';
import { IVideoItem } from 'types';
import * as C from 'components';
import * as S from './styles';

interface Props {
  videoData: IVideoItem;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  type?: string;
}

export const ContentsWrap = ({
  videoData,
  active,
  setActive,
  type = 'play'
}: Props) => {
  const [isShown, setIsShown] = useState(true);

  return (
    <S.Wrap>
      <C.MainHeader active={active} setActive={setActive} />
      <C.VideoPlayer video_url={videoData.video_url} />
      {type === 'delete' &&
      videoData.user.name === localStorage.getItem('name') ? (
        <C.MyVideoNav id={videoData.id} />
      ) : (
        <C.UserVideoNav videoData={videoData} isShown={isShown} />
      )}
      <C.DescriptionBox
        videoData={videoData}
        isShown={isShown}
        setIsShown={setIsShown}
      />
    </S.Wrap>
  );
};
