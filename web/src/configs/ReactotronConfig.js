import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const reactotron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();
  console.tron = reactotron;

  reactotron.clear();
}
