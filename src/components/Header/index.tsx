import { FC } from 'react';

import Link from 'next/link';

import { HStack, Box } from '@chakra-ui/react';

export const Header: FC = () => {
  return (
    <HStack justifyContent="space-between" height={70} padding={6} bg="gray.100">
      <Box>
        <Link href="/">ホーム</Link>
      </Box>
      <Box display="flex">
        <Box marginRight={4}>
          <Link href="signin">ログイン</Link>
        </Box>
        <Box>
          <Link href="signup">新規登録</Link>
        </Box>
      </Box>
    </HStack>
  );
};
