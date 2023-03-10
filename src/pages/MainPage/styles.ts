import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.style.nav_height});
  overflow: hidden;
  .swiper-container,
  .swiper-wrapper,
  .swiper-slide {
    height: 100% !important;
  }
  position: relative;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #dedfdf;
  position: relative;
  img {
    width: 120%;
    display: block;
    margin-top: -130px;
  }
  p {
    position: absolute;
    top: 50%;
    margin-left: 1px;
    font-size: 35px;
    font-weight: 900;
    z-index: 10;
  }
`;
