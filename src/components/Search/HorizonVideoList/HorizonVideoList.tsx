import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { VideoLink } from 'components';
import { IVideoListItem } from 'types';
import { getThumbnails } from 'utils';

import { GrOverview } from 'react-icons/gr';
import { FaRegThumbsUp } from 'react-icons/fa';
import * as S from './styles';

interface Props {
  title: string;
}

export const HorizonVideoList = ({ title }: Props) => {
  const current = title.includes('Like') ? 'likes' : 'hits';
  const [thumbnailList, setThumbnailList] = useState<IVideoListItem[]>([]);

  useEffect(() => {
    const fetcher = async () => {
      // setLoading(true);

      const thumbnails = await getThumbnails();
      setThumbnailList(current === 'hits' ? thumbnails : thumbnails.reverse());

      // setTimeout(() => {
      //   setLoading(false);
      // }, 2500);
    };
    fetcher();
  }, []);

  return (
    <S.VideoSection>
      <S.SectionTitle>
        {current === 'hits' ? <GrOverview /> : <FaRegThumbsUp />}
        <span>{title.toUpperCase()}</span>
      </S.SectionTitle>
      <Swiper
        spaceBetween={3}
        slidesPerView={2}
        scrollbar={{ draggable: true }}
      >
        {thumbnailList &&
          thumbnailList.map(({ id, url }: IVideoListItem) => (
            <SwiperSlide tag="li" key={id}>
              <VideoLink to="#">
                <img src={url} alt="thumbnail" />
              </VideoLink>
            </SwiperSlide>
          ))}
      </Swiper>
    </S.VideoSection>
  );
};
