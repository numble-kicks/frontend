import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, KakaoLogin } from 'components';
import * as S from './styles';

export const LoginPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!sessionStorage.getItem('kicks-user');

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, []);

  return (
    <S.Wrap>
      <S.Overlay />
      <S.Logo>KICKS</S.Logo>
      <S.Buttons>
        <KakaoLogin />
        <GoogleLogin />
      </S.Buttons>
    </S.Wrap>
  );
};
