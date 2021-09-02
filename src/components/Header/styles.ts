import styled from 'styled-components';

export const Container = styled.header`
  position: relative;

  background: var(--white);
  padding: 32px 65px 32px 55px;

  display: flex;
  align-items: center;

  > img {
    height: 40px;
  }

  .divisor {
    width: 24px;
    height: 0px;
    border: 1px solid #e6e8eb;
    transform: rotate(90deg);

    margin-left: 52px;
  }

  > h6 {
    margin-left: 32px;

    font-family: InterRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #808080;
  }

  .date {
    position: absolute;
    right: 65px;

    font-family: InterRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #808080;
    text-transform: capitalize;
  }
`;
