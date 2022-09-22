import { Header, Footer } from 'components/common/common';
import { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
