import React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export type { LayoutProps };
export { Layout };
