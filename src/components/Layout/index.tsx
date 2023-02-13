import type { FC, ReactNode } from 'react';

import { Header } from '../Header';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ height: 'calc(100vh - 70px)', padding: '40px' }}>{children}</main>
    </>
  );
};
