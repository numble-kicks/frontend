import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VideoContent = styled.ul`
  flex: 1;

  & > div > div:first-child {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: min-content;
    gap: 3px;
    padding: 3px 10px;
  }
`;

export const VideoLink = styled(Link)`
  display: block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14);

  img {
    display: block;
    width: 115px;
    height: 157px;
    object-fit: cover;
  }
`;
