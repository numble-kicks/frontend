import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ContentsWrap } from 'components';
import { getVideos } from 'utils/getVideos';
import { IVideoItem } from 'types';

import * as S from './styles';

export const MainPage = () => {
  const [active, setActive] = useState(true);
  const [videoList, setVideoList] = useState<IVideoItem[]>([]);

  useEffect(() => {
    const fetcher = async () => {
      const videos = await getVideos();
      setVideoList(videos);
    };
    fetcher();
  }, []);

  console.log(videoList);

  return (
    <S.Wrap>
      <Swiper direction="vertical">
        {videoList?.map(video => (
          <SwiperSlide key={video.id}>
            <ContentsWrap
              videoData={video}
              active={active}
              setActive={setActive}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrap>
  );
};
