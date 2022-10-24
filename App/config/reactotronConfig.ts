import Config from '../config/debugConfig'
import Immutable from 'seamless-immutable'
import Reactotron from 'reactotron-react-native'
import {NativeModules} from 'react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!
  const scriptURL = NativeModules.SourceCode.scriptURL;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron
      // https://github.com/infinitered/reactotron/issues/272#issuecomment-272013885
    .configure({ name: 'RedCarpet Rewards', host: scriptHostname })
    .useReactNative()
    .use(reduxPlugin({ onRestore: Immutable }))
    .use(sagaPlugin({ except: [''] }))
    .connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron
}
