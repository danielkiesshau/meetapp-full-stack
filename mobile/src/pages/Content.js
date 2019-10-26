import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import routes from '../routes';
import { Header } from '../components';

const Content = () => {
  const token = useSelector(({ auth: { auth } }) => auth);
  const isAuthenticated = token !== null;
  const Router = routes(isAuthenticated);
  return (
    <>
      <StatusBar
        backgroundColor="rgba(0, 0, 0, 0.9)"
        barStyle="light-content"
      />
      <Router />
      {isAuthenticated && <Header />}
    </>
  );
};

export default Content;
