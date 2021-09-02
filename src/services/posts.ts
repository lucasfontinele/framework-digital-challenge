import swal from 'sweetalert2';

import api from './api';

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type ApiPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  user: User;
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const { data: users } = await api.get<User[]>(`/users`);

    return users;
  } catch {
    return [];
  }
};

export const getPosts = async (limit = 5, page = 0): Promise<ApiPost[]> => {
  try {
    const { data } = await api.get<ApiPost[]>(
      `/posts?_start=${page}&_limit=${limit}`,
    );

    return data;
  } catch {
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ocorreu um erro ao buscar os posts, tente novamente mais tarde.',
    });

    return [];
  }
};
