import type { NextPage } from 'next';

import { Heading, HStack, Text } from '@chakra-ui/react';

import { Layout } from '../../components/Layout';
import { useBooksQuery } from '../../graphql/generated/graphql';

const RentalBooks: NextPage = () => {
  const { data } = useBooksQuery();

  return (
    <Layout>
      <Heading as="h1" mb={10}>
        貸出書一覧
      </Heading>
      {data?.books.map(({ id, title, price }) => (
        <HStack key={id} spacing={8} fontSize={20}>
          <Text>{id}</Text>
          <Text>{title}</Text>
          <Text>{`${price}円`}</Text>
        </HStack>
      ))}
    </Layout>
  );
};

export default RentalBooks;
