import type { NextPage } from 'next';

import { Heading, Box } from '@chakra-ui/react';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { TextFiled } from '../../components/TextFiled';

const CreateUser: NextPage = () => {
  return (
    <Layout>
      <Heading as="h1" mb={10}>
        新規ユーザー登録
      </Heading>
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <TextFiled label="名前" isLabelRequier mb={10} />
        <TextFiled type="email" label="メールアドレス" isLabelRequier />
        <Button type="submit" colorScheme="blue" mt={10}>
          登録
        </Button>
      </Box>
    </Layout>
  );
};

export default CreateUser;
