import React, { useEffect, useState } from 'react';
import { AdBanner, HistoryList, HorizonVideoList, SearchBar } from 'components';
import * as S from './styles';
import { HistoryType } from './types';

export const SearchPage = () => {
  const [isOpened, setIsOpend] = useState(false);
  const [history, setHistory] = useState<HistoryType[]>(
    JSON.parse(localStorage.getItem('search-history') || '[]')
  );

  const handleAddHistory = (text: string) => {
    setHistory((prev: HistoryType[]) => {
      if (prev.length > 4) prev.pop();
      return [{ id: Date.now(), text: text }, ...prev];
    });
  };

  const handleRemoveHistory = (id: number) => {
    setHistory(history.filter(keyword => keyword.id !== id));
  };

  const handleReset = () => setHistory([]);
  const showHistory = () => setIsOpend(true);
  const hideHistory = () => setIsOpend(false);

  useEffect(() => {
    localStorage.setItem('search-history', JSON.stringify(history));
  }, [history]);

  return (
    <S.Wrap>
      <SearchBar showHistory={showHistory} addHistory={handleAddHistory} />
      {isOpened && (
        <HistoryList
          history={history}
          hideHistory={hideHistory}
          removeHistory={handleRemoveHistory}
          resetHistory={handleReset}
        />
      )}
      <AdBanner
        height="190px"
        src="https://user-images.githubusercontent.com/68415905/224191061-afacedc6-d2af-4aba-b32a-3b3159f86a32.JPG"
        href="https://thefitville.com/"
      />
      <HorizonVideoList title="조회수 Best10" />
      <HorizonVideoList title="좋아요 Best10" />
    </S.Wrap>
  );
};
