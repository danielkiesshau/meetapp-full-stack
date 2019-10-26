import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { Header } from '~/components';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
