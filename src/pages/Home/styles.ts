import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 75px;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    margin-top: 55px;

    font-family: RobotoBlack;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    color: #494d4b;
  }

  table {
    margin-top: 35px;
    border-collapse: collapse;
    width: 100%;
  }

  tr:first-child {
    box-sizing: border-box;
    border-bottom: 1px solid #e6e8eb;

    > th {
      padding-bottom: 15px;
    }
  }

  tr:not(:first-child) {
    padding: 12px 9px;
    border-bottom: 1px solid #e6e8eb;
  }

  tr {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  th,
  td {
    color: #000;
  }

  td {
    display: flex;
    align-items: center;

    max-width: 33%;

    > img {
      border-radius: 8px;
    }

    > .title {
      margin-left: 16px;

      font-family: RobotoBlack;
      font-style: normal;
      font-weight: 900;
      font-size: 16px;
      line-height: 19px;
      color: #494d4b;
    }

    > .author {
      font-family: InterRegular;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #808080;
    }

    > .date {
      font-family: InterRegular;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      text-transform: capitalize;
      color: #808080;
    }
  }

  th {
    font-family: RobotoMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    text-transform: uppercase;

    color: #aba8b3;
  }
`;

export const LoadMoreButtonContainer = styled.div`
  margin: 35px 0;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.disabled {
    cursor: not-allowed;
  }
`;

export const LoadMoreButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;

  align-self: center;

  background: var(--purple);
  border-radius: 8px;

  height: 60px;
  width: 250px;

  font-family: RobotoBold;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;

  color: var(--white);

  :disabled {
    pointer-events: none;
    opacity: 0.4;
  }
`;
