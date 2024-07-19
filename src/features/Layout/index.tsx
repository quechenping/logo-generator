import { FC } from 'react';

import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const LayoutWrapper: FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <div className="w-full flex-1 px-6 py-8">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
