import React from 'react';
import './src/configs/ReactotronConfig';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/configs/store';
import { Loading } from './src/pages';
import Content from './src/pages/Content';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        <Content />
      </PersistGate>
    </Provider>
  );
}
