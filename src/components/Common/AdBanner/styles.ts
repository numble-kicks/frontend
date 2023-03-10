import styled from 'styled-components';

export const AdBannerContainer = styled.div`
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  font-size: 17px;
  top: 4px;
  right: 8px;
  z-index: 1000;
  background: #333;
  color: #fff;
  padding: 0 5px;
  opacity: 0.8;
`;
