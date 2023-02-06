import { FC } from 'react';

import Link from 'next/link';

import { HStack, Box } from '@chakra-ui/react';

export const Header: FC = () => {
  return (
    <HStack as="nav" justifyContent="space-between" height={70} padding={6} bg="gray.100">
      <Box>
        <Link href="/">本の貸出アプリ</Link>
      </Box>
      <Box display="flex">
        <Box marginRight={4}>
          <Link href="/">ユーザー一覧</Link>
        </Box>
        <Box marginRight={4}>
          <Link href="/rental-books">貸出書一覧</Link>
        </Box>
        <Box>
          <Link href="/create-user">新規ユーザー登録</Link>
        </Box>
      </Box>
    </HStack>
  );
};
