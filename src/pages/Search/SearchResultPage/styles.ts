import styled from 'styled-components';
import { MessageContent } from 'components/Common/VideoList/styles';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${MessageContent} {
    img {
      margin-top: -90px;
    }
  }
`;

export const SortByList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  li {
    cursor: pointer;
    margin: 0 10px;
    &.active {
      border-bottom: 1px solid #000;
      font-weight: 900;
    }
  }
`;
