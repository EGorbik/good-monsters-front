import { ReactNode } from 'react';
import './Layout.scss';

type LayoutType = {
  children: ReactNode;
};
export const Layout = ({ children }: LayoutType) => {
  return <div>{children}</div>;
};
