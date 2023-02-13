import { useState, type ChangeEvent } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Heading, Box } from '@chakra-ui/react';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { TextFiled } from '../../components/TextFiled';
import { useCreateUserMutation } from '../../graphql/generated/graphql';

type UserForm = {
  name: string;
  email: string;
};

// TODO: react hook formに置き換え & htmlリファクタリング
const CreateUser: NextPage = () => {
  const { push } = useRouter();

  const [input, setInput] = useState<UserForm>({ name: '', email: '' });

  const [createUser] = useCreateUserMutation({
    variables: { createUserInput: { name: input.name, email: input.email } },
    refetchQueries: ['Users'],
  });

  const onChangeNameInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, name: e.target.value });
  };

  const onChangeEmailInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, email: e.target.value });
  };

  const onClickUserRegisterHandler = async () => {
    await createUser();
    await push('/');
  };

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
        <TextFiled label="名前" isLabelRequier mb={10} onChange={onChangeNameInputHandler} />
        <TextFiled
          type="email"
          label="メールアドレス"
          isLabelRequier
          onChange={onChangeEmailInputHandler}
        />
        <Button type="button" colorScheme="blue" mt={10} onClick={onClickUserRegisterHandler}>
          登録
        </Button>
      </Box>
    </Layout>
  );
};

export default CreateUser;
