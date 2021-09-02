import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Skeleton } from '@material-ui/lab';

export const BackButtonContainer = styled(Link)`
  margin-top: 50px;

  display: flex;
  align-items: center;

  text-decoration: none;

  > svg {
    font-size: 20px;
  }

  > p {
    margin-left: 22px;

    font-family: RobotoLight;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    color: var(--purple);
  }
`;

export const PostContainer = styled.article`
  margin-top: 50px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 160px;

  border-radius: 16px;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 32px 16px;

  > h1 {
    max-width: 414px;

    font-family: RobotoBlack;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 37px;
    color: var(--purple);
  }

  .info {
    margin-top: 28px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid #e6e8eb;

    p {
      font-family: InterRegular;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #808080;

      margin-bottom: 18px;
    }
  }

  .content {
    margin-top: 32px;

    font-family: InterRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #494d4b;
  }
`;

export const PostImageSkeleton = styled(Skeleton)`
  && {
    margin: 48px 0 42px;
    border-radius: 16px;
  }
`;

export const PostTitleSkeleton = styled(Skeleton)`
  && {
    width: 100%;
    height: 50px;
  }
`;

export const PostAuthorSkeleton = styled(Skeleton)`
  && {
    margin-top: 28px;
    height: 17px;
  }
`;

export const DivisorLine = styled.div`
  border-bottom: 1px solid #e6e8eb;
  width: 100%;
  margin-top: 18px;
`;

export const PostContentSkeleton = styled(Skeleton)`
  && {
    height: 400px;
  }
`;
