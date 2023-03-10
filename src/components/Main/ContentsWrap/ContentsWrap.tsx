import React, { useState } from 'react';

import { IVideoItem } from 'types';
import * as C from 'components';

import { ReactComponent as ArrowIcon } from 'assets/svg/arrow.svg';
import * as S from './styles';

interface Props {
  videoData: IVideoItem;
  type?: string;
}

export const ContentsWrap = ({ videoData, type = 'play' }: Props) => {
  const [isShown, setIsShown] = useState(true);
  const handleClick = () => setIsShown(!isShown);

  return (
    <S.Wrap>
      <C.VideoPlayer video_url={videoData.video_url} />
      {type === 'delete' &&
      videoData.user.name === localStorage.getItem('name') ? (
        <C.MyVideoNav id={videoData.id} />
      ) : (
        <C.UserVideoNav videoData={videoData} isShown={isShown} />
      )}
      <C.DescriptionBox videoData={videoData} isShown={isShown} />

      <S.HideButton onClick={handleClick} isShown={isShown}>
        <ArrowIcon className="icon" />
      </S.HideButton>
    </S.Wrap>
  );
};
