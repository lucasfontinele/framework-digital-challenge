import React, { ReactNode } from 'react';

import Header from 'components/Header';

type DefaultLayoutProps = {
  children: ReactNode;
};

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default DefaultLayout;
