import type { NextPage } from 'next';

import { Heading, HStack, Text } from '@chakra-ui/react';

import { Layout } from '../components/Layout';
import { useUsersQuery } from '../graphql/generated/graphql';

const Home: NextPage = () => {
  const { data, loading } = useUsersQuery();

  if (loading) return <div>loading...</div>;

  return (
    <Layout>
      <Heading as="h1" mb={10}>
        ユーザー一覧
      </Heading>
      {data?.users.map(({ id, name }) => (
        <HStack key={id} spacing={8} fontSize={20}>
          <Text>{id}</Text>
          <Text>{name}</Text>
        </HStack>
      ))}
    </Layout>
  );
};

export default Home;
