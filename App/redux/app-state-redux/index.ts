import { Action as ReduxAction } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../../redux'

export const AppStateSelectors = {
  nextAppState: (state: RootState) => state.appState.nextAppState
}

export enum AppStateTypes {
  UNSUBSCRIBE_APP_STATE_CHANGE = 'UNSUBSCRIBE_APP_STATE_CHANGE',
  SUBSCRIBE_APP_STATE_CHANGE = 'SUBSCRIBE_APP_STATE_CHANGE',
  SUBSCRIBE_APP_STATE_CHANGE_SUCCESS = 'SUBSCRIBE_APP_STATE_CHANGE_SUCCESS',
}

export type AppStateAction = 
  | UnsubscribeAppStateChange
  | SubscribeAppStateChange
  | SubscribeAppStateChangeSuccess

type UnsubscribeAppStateChange = ReduxAction<AppStateTypes.UNSUBSCRIBE_APP_STATE_CHANGE>

type SubscribeAppStateChange = ReduxAction<AppStateTypes.SUBSCRIBE_APP_STATE_CHANGE>

interface SubscribeAppStateChangeSuccess
  extends ReduxAction<AppStateTypes.SUBSCRIBE_APP_STATE_CHANGE_SUCCESS> {
  payload: {
    nextAppState: String
  }
}

const unsubscribeAppStateChange = (): UnsubscribeAppStateChange => ({
  type: AppStateTypes.UNSUBSCRIBE_APP_STATE_CHANGE
})

const subscribeAppStateChange = (): SubscribeAppStateChange => ({
  type: AppStateTypes.SUBSCRIBE_APP_STATE_CHANGE
})

const subscribeAppStateChangeSuccess = (nextAppState: String): SubscribeAppStateChangeSuccess => ({
  type: AppStateTypes.SUBSCRIBE_APP_STATE_CHANGE_SUCCESS,
  payload: { nextAppState }
})

export default {
  unsubscribeAppStateChange,
  subscribeAppStateChange,
  subscribeAppStateChangeSuccess,
}
