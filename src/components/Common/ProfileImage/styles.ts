import styled from 'styled-components';

export const ImageContainer = styled.div<{ size: string }>`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  border-radius: 50%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
