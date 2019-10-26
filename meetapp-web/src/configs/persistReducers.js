import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'meetapp',
      storage,
      whitelist: ['auth', 'meetup']
    },
    reducers
  );
  return persistedReducers;
};
