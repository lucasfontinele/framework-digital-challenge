import React, { useState, useEffect, useCallback } from 'react';

import { useParams } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import swal from 'sweetalert2';
import axios from 'axios';

import DefaultLayout from 'layouts/DefaultLayout';
import GridContainer from 'components/GridContainer';

import { Post, getPost } from 'services/posts';

import postImg from 'static/images/default-post.png';

import {
  BackButtonContainer,
  PostContainer,
  PostImage,
  PostContent,
  PostImageSkeleton,
  PostTitleSkeleton,
  PostAuthorSkeleton,
  DivisorLine,
  PostContentSkeleton,
} from './styles';

type PostParams = {
  id: string;
};

function PostPage() {
  const { id } = useParams<PostParams>();

  const [fetching, setFetching] = useState(true);
  const [post, setPost] = useState<Post>();

  const handleGetPost = useCallback(async () => {
    try {
      const data = await getPost(id);

      setPost(data);
      setFetching(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 404) {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Post não encontrado.',
          });
        }
      }
    }
  }, [id]);

  useEffect(() => {
    handleGetPost();
  }, [handleGetPost]);

  return (
    <DefaultLayout>
      <GridContainer sm>
        <BackButtonContainer to="/">
          <FaChevronLeft color="#7B5DD5" />
          <p>voltar</p>
        </BackButtonContainer>
        {fetching && !post && (
          <>
            <PostImageSkeleton variant="rect" height={160} />
            <PostTitleSkeleton variant="text" />
            <PostAuthorSkeleton variant="text" />
            <DivisorLine />
            <PostContentSkeleton variant="text" />
          </>
        )}
        {post && (
          <PostContainer>
            <PostImage src={postImg} alt="Post Image" />
            <PostContent>
              <h1>{post.title}</h1>
              <div className="info">
                <p>{post.user.name}</p>
                <p>8 Jan 21</p>
              </div>
              <p className="content">
                {post.body}
                {post.body}
                {post.body}
                {post.body}
                {post.body}
                {post.body}
              </p>
            </PostContent>
          </PostContainer>
        )}
      </GridContainer>
    </DefaultLayout>
  );
}

export default PostPage;
