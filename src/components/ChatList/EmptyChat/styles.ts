import styled from 'styled-components';

export const EmptyChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 15px;
    margin-bottom: 15px;
    color: #bbb;
    margin-top: -30px;
    line-height: 1.3;
    text-align: center;
  }

  button {
    padding: 7px 15px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.color.main};
    border-radius: 20px;
    a {
      color: ${({ theme }) => theme.color.text_white};
    }
  }
`;
