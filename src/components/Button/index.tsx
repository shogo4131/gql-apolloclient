import type { FC, ReactNode } from 'react';

import { Button as ChakraButton, type ButtonProps } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
} & ButtonProps;

export const Button: FC<Props> = ({ children, ...rest }) => {
  return (
    <ChakraButton type="button" {...rest}>
      {children}
    </ChakraButton>
  );
};
