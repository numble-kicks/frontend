import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AlertIcon } from 'assets/svg/alert.svg';
import * as S from './styles';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainHeader = ({ active, setActive }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLElement;
    setActive(btn.innerText === '추천');
  };

  return (
    <S.Header>
      <S.Category>
        <button onClick={handleClick} className={active ? '' : 'active'}>
          팔로잉
        </button>
        <button onClick={handleClick} className={active ? 'active' : ''}>
          추천
        </button>
      </S.Category>
      <Link to={'/notice'}>
        <S.Notification>
          <AlertIcon className="icon" />
        </S.Notification>
      </Link>
    </S.Header>
  );
};
