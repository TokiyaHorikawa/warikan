import React from 'react';
import BaseRoute from 'App/Router';

const Layout: React.FC = () => {
  const LoginedLayout: React.FC = ({ children }) => {
    return (
      <div className="app">
        <div className="header w-full h-12 flex justify-center items-center bg-white border-b">
          <h1>ワリ・カン</h1>
        </div>
        <div className="main">{children}</div>
      </div>
    );
  };
  return (
    <LoginedLayout>
      <BaseRoute />
    </LoginedLayout>
  );
};

export default Layout;
