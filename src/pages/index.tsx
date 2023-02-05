import { Fragment } from 'react';

import type { NextPage } from 'next';

import { Layout } from '../components/Layout';
import { useUsersQuery } from '../graphql/generated/graphql';

const Home: NextPage = () => {
  const { data, loading } = useUsersQuery();

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
