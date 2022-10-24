import { Reducer } from 'redux'
import AppLaunchActions, { AppStateTypes } from '../app-state-redux'

type AppState = {
  nextAppState: String,
}

const INITIAL_STATE: AppState = {
  nextAppState: "active",
}

const subscribeAppStateChangeSuccess = (state: AppState, nextAppState: String) => ({
  ...state, nextAppState
})

const reducer: Reducer<AppState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case AppStateTypes.SUBSCRIBE_APP_STATE_CHANGE_SUCCESS:
      return subscribeAppStateChangeSuccess(state, action.payload.nextAppState)
    default:
      return state
  }
}

export default reducer
