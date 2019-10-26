import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { AsyncStorage } from 'react-native';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      host: '192.168.0.15'
    })
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .connect();
  console.tron = reactotron;

  reactotron.clear();
}
