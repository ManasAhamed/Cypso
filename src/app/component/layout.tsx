import { ReactNode } from 'react';
import Header from './nav/header'; 
import Footer from './nav/footer'; // Import the Footer

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header /> 
      <main>{children}</main>
      <Footer /> 
    </>
  );
};

export default Layout;
