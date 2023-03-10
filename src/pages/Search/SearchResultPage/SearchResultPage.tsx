import React, { useState } from 'react';
import * as S from './styles';
import { SEARCHED_VIDEO_API } from 'utils/api';
import { AdBanner, PageHeader, VideoList } from 'components';
import { useLocation } from 'react-router-dom';

export const SearchResultPage = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const location = useLocation();
  const searchedText = (location.state as string) || '';

  return (
    <S.Wrap>
      <PageHeader title={searchedText} backTo="/search" />
      <AdBanner
        height="100px"
        src="https://user-images.githubusercontent.com/68415905/224191061-afacedc6-d2af-4aba-b32a-3b3159f86a32.JPG"
        href="https://thefitville.com/"
      />
      <S.SortByList>
        {['최신순', '인기순'].map((sortBy, i) => (
          <li
            key={i}
            onClick={() => setActiveIdx(i)}
            className={activeIdx === i ? 'active' : ''}
          >
            {sortBy}
          </li>
        ))}
      </S.SortByList>
      {activeIdx ? (
        <VideoList
          api={SEARCHED_VIDEO_API(searchedText, null)}
          message="No Related Videos"
        />
      ) : (
        <VideoList
          api={SEARCHED_VIDEO_API(searchedText, 'hits')}
          message="No Related Videos"
        />
      )}
    </S.Wrap>
  );
};
