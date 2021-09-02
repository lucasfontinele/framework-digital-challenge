import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 72px;
  width: 100%;

  display: flex;
  align-items: center;
`;

export const Search = styled.input`
  border-radius: 8px 0 0 8px;
  width: 100%;
  height: 100%;
  border: none;

  font-family: RobotoRegular;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #a8a8b3;
  padding: 0 30px;
`;

export const SubmitButton = styled.button`
  width: 210px;
  height: 100%;

  border: none;
  outline: none;
  cursor: pointer;

  background: var(--purple);
  border-radius: 0px 8px 8px 0px;

  font-family: RobotoBold;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: var(--white);
`;
