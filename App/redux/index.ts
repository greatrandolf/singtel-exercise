import { applyMiddleware, legacy_createStore as createStore, Reducer, compose } from 'redux'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import createSagaMiddleware, { Saga } from 'redux-saga'
import reduxPersist from '../config/reduxPersist'
import rehydration from '../services/rehydration'
import Config from '../config/debugConfig'

import appLaunchReducer from './app-launch-redux/reducer'
import authReducer from './auth-redux/reducer'
import loginReducers from './login-redux/reducer'
import menuReducer from './menu-redux/reducer'
import appStateReducer from './app-state-redux/reducer'
import dashboardReducer from './dashboard-redux/reducer'
import {reducer as network } from 'react-native-offline'

import rootSaga from '../saga'

export const rootReducer = combineReducers({
  appLaunch: appLaunchReducer,
  auth: authReducer,
  login: loginReducers,
  menu: menuReducer,
  appState: appStateReducer,
  dashboard: dashboardReducer,
  network,
})

const configureStore = (reducer: Reducer, saga: Saga) => {
  let finalReducers = reducer
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (reduxPersist.active)
    finalReducers = persistReducer(reduxPersist.storeConfig, reducer)

  const sagaMonitor = Config.useReactotron ? console.tron?.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  const middlewares = [sagaMiddleware]

  const store = Config.useReactotron ? createStore(finalReducers, {}, compose(applyMiddleware(...middlewares), console.tron.createEnhancer())) :
                                        createStore(finalReducers, applyMiddleware(...middlewares))


  if (reduxPersist.active)
    rehydration.updateReducers(store)

  sagaMiddleware.run(saga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../redux').rootReducer
      store.replaceReducer(nextRootReducer)

      // const newYieldedSagas = require('../saga')
      // sagasManager.cancel()
      // sagasManager.done.then(() => {
      //   sagasManager = sagaMiddleware(newYieldedSagas)
      // })
    })
  }
  return store
}

const store = configureStore(rootReducer, rootSaga)
export type RootDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export default store
