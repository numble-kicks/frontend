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
        src="https://www.bata.in/on/demandware.static/-/Sites-bata-in-Library/default/dw5e87b827/PLP/EOSS_Dec22-Thin-M.jpg"
        href="https://www.bata.in/sale/"
      />
      <S.SortByList>
        {['Latest', 'Popular'].map((sortBy, i) => (
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
