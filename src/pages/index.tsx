import { Fragment } from 'react';

import type { NextPage } from 'next';

import { useQuery } from '@apollo/client';

import { Layout } from '../components/Layout';
import { USERS_QUERY, type UsersData } from '../graphql/queries/user.queries';

const Home: NextPage = () => {
  const { data, loading } = useQuery<UsersData>(USERS_QUERY);

  if (loading) return <div>loading...</div>;

  return (
    <Layout>
      {data?.users.map((user) => (
        <Fragment key={user.id}>
          <div>{user.id}</div>
          <div>{user.name}</div>
          <div>{user.email}</div>
        </Fragment>
      ))}
    </Layout>
  );
};

export default Home;
