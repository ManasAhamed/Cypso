import { ReactNode } from 'react';
import Header from './nav/header'; 

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header /> 
      <main>{children}</main>
    </>
  );
};

export default Layout;
