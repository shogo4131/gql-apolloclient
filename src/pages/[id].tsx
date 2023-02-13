import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading, Box } from '@chakra-ui/react';

import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { useUserQuery, useRemoveUserMutation } from '../graphql/generated/graphql';

const UserDetail: NextPage = () => {
  const { query, push } = useRouter();

  const id = Array.isArray(query.id) && query.id ? query.id[0] : query.id ?? '';

  const { data, loading } = useUserQuery({ variables: { id } });
  const [removeUser] = useRemoveUserMutation({
    variables: { id },
    refetchQueries: ['Users'],
  });

  const onClickRemoveUserHandler = async () => {
    if (confirm('本当に削除しますか？')) {
      await removeUser();
      await push('/');
    }
  };

  if (loading) return <div>loading...</div>;

  return (
    <Layout>
      <TableContainer>
        <Heading as="h1" mb={10}>
          ユーザー詳細情報
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>名前</Th>
              <Th>メールアドレス</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{data?.user.name}</Td>
              <Td>{data?.user.email}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="end" mt={10}>
        <Button type="button" onClick={onClickRemoveUserHandler}>
          削除
        </Button>
      </Box>
    </Layout>
  );
};

export default UserDetail;
