import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Heading, HStack, Text } from '@chakra-ui/react';

import { Layout } from '../components/Layout';
import { useUsersQuery } from '../graphql/generated/graphql';

const Home: NextPage = () => {
  const { push } = useRouter();
  const { data, loading } = useUsersQuery();

  const onClickUserDetailPageHandler = (id: string) => {
    push(`/${id}`);
  };

  if (loading) return <div>loading...</div>;

  return (
    <Layout>
      <Heading as="h1" mb={10}>
        ユーザー一覧
      </Heading>
      {data?.users.map(({ id, name }, index) => (
        <HStack key={id} spacing={8} fontSize={20} onClick={() => onClickUserDetailPageHandler(id)}>
          <Text>{index + 1}</Text>
          <Text>{name}</Text>
        </HStack>
      ))}
    </Layout>
  );
};

export default Home;
