import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const hostName = scriptURL.split('://')[1].split(':')[0];
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      host: hostName,
      name: 'Compasso APP',
    })
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin());

  tron.connect();

  tron.clear();

  console.tron = tron;
}
