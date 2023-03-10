import styled from 'styled-components';

export const Wrap = styled.div<{ isShown: boolean }>`
  left: ${({ theme }) => theme.style.edge_padding};
  position: absolute;
  width: 290px;
  bottom: ${({ isShown }) => (isShown ? '25px' : '-150px')};
  transition: all 0.25s ease-out;
  z-index: 100;
`;

export const ContentBox = styled.div`
  width: 100%;
  max-height: 150px;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: white;

  .price {
    font-size: 16px;
    span {
      font-size: 18px;
    }
  }

  .name {
    font-size: 14px;
    margin: 5px 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }

  .secondhand,
  .desc {
    font-size: 12px;
    opacity: 0.8;
  }

  .desc {
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 14px;
  }
`;
