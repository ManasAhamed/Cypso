import { ReactNode } from "react";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
