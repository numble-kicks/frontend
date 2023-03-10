import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ContentsWrap, MainHeader } from 'components';
import { getVideos } from 'utils/getVideos';
import { IVideoItem } from 'types';

import LoadingImage from 'assets/img/loading.gif';
import * as S from './styles';

export const MainPage = () => {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [videoList, setVideoList] = useState<IVideoItem[]>([]);

  useEffect(() => {
    const fetcher = async () => {
      setLoading(true);

      const videos = await getVideos();
      setVideoList(videos);

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    fetcher();
  }, []);

  return loading ? (
    <S.Loading>
      <img src={LoadingImage} alt="loading" />
      <p>KICKS</p>
    </S.Loading>
  ) : (
    <S.Wrap>
      <MainHeader active={active} setActive={setActive} />
      <Swiper direction="vertical">
        {videoList?.map(video => (
          <SwiperSlide key={video.id}>
            <ContentsWrap videoData={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrap>
  );
};
