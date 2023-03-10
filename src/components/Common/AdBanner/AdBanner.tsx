import { useState } from 'react';
import * as S from './styles';

interface Props {
  height: string;
  src: string;
  href: string;
}

export const AdBanner = ({ height, src, href }: Props) => {
  const [showAd, setShowAd] = useState(true);
  const closeBanner = () => setShowAd(false);

  return (
    <S.AdBannerContainer
      style={{ display: `${showAd ? 'block' : 'none'}`, height: height }}
    >
      <a href={href} target="_blank" rel="noreferrer">
        <img src={src} alt="ad" />
      </a>
      <S.CloseButton onClick={closeBanner}>x</S.CloseButton>
    </S.AdBannerContainer>
  );
};
