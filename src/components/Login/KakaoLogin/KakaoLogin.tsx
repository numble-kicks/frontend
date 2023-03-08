import kakaoButtonImage from 'assets/img/kakaoLogin.png';
import { KAKAO_LOGIN_URL } from 'utils/api';
import styled from 'styled-components';

export const KakaoLogin = () => {
  return (
    <KakaoButton>
      <a href={KAKAO_LOGIN_URL}>
        <img src={kakaoButtonImage} alt="login-btn" />
      </a>
    </KakaoButton>
  );
};

const KakaoButton = styled.button`
  margin-bottom: 10px;
  img {
    width: 80%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
