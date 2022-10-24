import { Store } from 'redux'
import { persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import AppLaunchActions from '../redux/app-launch-redux'
import reduxPersist from '../config/reduxPersist'

const updateReducers = (store: Store) => {
    const reducerVersion = reduxPersist.reducerVersion
    const appLaunch = () => store.dispatch(AppLaunchActions.appLaunch())
    
    // Check to ensure latest reducer version
    AsyncStorage.getItem('reducerVersion').then((localVersion: string) => {
        if (localVersion !== reducerVersion) {
    
            // Purge store
            persistStore(store, null, appLaunch).purge()
            AsyncStorage.setItem('reducerVersion', reducerVersion)
        } else {
            persistStore(store, null, appLaunch)
        }
    }).catch((e) => {
        persistStore(store, null, appLaunch)
        AsyncStorage.setItem('reducerVersion', reducerVersion)
    })
  }

  export default {
    updateReducers
  }