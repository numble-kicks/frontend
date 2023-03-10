import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

export const HideButton = styled.button<{ isShown: boolean }>`
  position: absolute;
  bottom: 25px;
  right: 27px;

  .icon {
    width: 25px;
    -webkit-filter: drop-shadow(2px 3px 1px rgb(0 0 0 / 0.3));
    filter: drop-shadow(2px 3px 1px rgb(0 0 0 / 0.3));
    transform: rotate(${({ isShown }) => (isShown ? 0 : '180deg')});
    * {
      fill: #fff;
    }
  }
`;
