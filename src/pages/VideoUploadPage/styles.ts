import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
`;

export const Form = styled.form`
  width: 100%;
  height: calc(100% - 50px);
`;

export const MainContainer = styled.div`
  height: 100%;
  overflow: scroll;
  padding: 20px;
`;

export const FileInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 45px;
  font-size: 15px;
  border-radius: 5px;
  color: white;
  background-color: #c13128;
  margin-bottom: 30px;
`;
