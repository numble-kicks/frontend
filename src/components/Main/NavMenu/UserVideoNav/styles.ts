import styled from 'styled-components';

export const Wrap = styled.div<{ isShown: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 90px;
  right: ${({ isShown }) => (isShown ? '15px' : '-50px')};
  transition: all 0.25s ease-out;
  z-index: 1000;
`;
