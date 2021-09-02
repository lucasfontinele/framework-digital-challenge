import React, { useCallback, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import DefaultLayout from 'layouts/DefaultLayout';

import GridContainer from 'components/GridContainer';
import SearchBar from 'components/SearchBar';

import { getPosts, getUsers, Post, User } from 'services/posts';
import { handleFormatDate } from 'helpers/date';

import {
  SearchContainer,
  PostsContainer,
  LoadMoreButtonContainer,
  LoadMoreButton,
} from './styles';

const POSTS_LIMIT_PAGINATION = 5;

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [fetching, setFetching] = useState(true);
  const [authorsSearch, setAuthorsSearch] = useState('');

  const handleGetMoreData = () => {
    const nextPage = page + POSTS_LIMIT_PAGINATION;

    setPage(nextPage);
  };

  const handleGetPosts = useCallback(async () => {
    setFetching(true);

    const data = await getPosts(POSTS_LIMIT_PAGINATION, page);

    if (data.length <= 0) {
      setHasMore(false);

      return;
    }

    const formattedPosts: Post[] = await Promise.all(
      data.map(async ({ id, body, title, userId }): Promise<Post> => {
        const user = users.find(current => current.id === userId);

        if (!user) {
          throw new Error('User not found');
        }

        return {
          id,
          body,
          title,
          user,
        };
      }),
    );

    setPosts(current => [...current, ...formattedPosts]);
    setFetching(false);
  }, [page, users]);

  const handleGetUsers = useCallback(async () => {
    const data = await getUsers();

    setUsers(data);
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      handleGetPosts();
    }
  }, [users, handleGetPosts]);

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);

  return (
    <DefaultLayout>
      <GridContainer>
        <SearchContainer>
          <SearchBar onSearch={(search: string) => setAuthorsSearch(search)} />
        </SearchContainer>
        <PostsContainer>
          <h3>Todos as postagens</h3>
          <table>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Data</th>
            </tr>
            {posts
              .filter(post => post.user.name.includes(authorsSearch))
              .map(post => (
                <Link to={`/post/${post.id}`} key={post.id}>
                  <td>
                    <img
                      src="https://via.placeholder.com/40x40"
                      alt="table placeholder"
                    />
                    <p className="title">{post.id}</p>
                  </td>
                  <td>
                    <p className="author">{post.user.name}</p>
                  </td>
                  <td>
                    <p className="date">
                      {handleFormatDate({
                        date: new Date(),
                        _format: 'd MMM yy',
                      })}
                    </p>
                  </td>
                </Link>
              ))}
          </table>
        </PostsContainer>
        {hasMore && (
          <LoadMoreButtonContainer className={fetching ? 'disabled' : ''}>
            <LoadMoreButton
              type="button"
              onClick={handleGetMoreData}
              disabled={fetching}
            >
              Carregar mais
            </LoadMoreButton>
          </LoadMoreButtonContainer>
        )}
      </GridContainer>
    </DefaultLayout>
  );
}

export default Home;
