import { Reducer } from 'redux'
import AppLaunchActions, { AppLaunchTypes } from '../app-launch-redux'

type AppLaunchState = {
  didAppLaunch: boolean,
}

const INITIAL_STATE: AppLaunchState = {
  didAppLaunch: false,
}

const appLaunch = (state: AppLaunchState) => ({
    ...state, didAppLaunch: true,
})

const reducer: Reducer<AppLaunchState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case AppLaunchTypes.APP_LAUNCH:
      return appLaunch(state)
    default:
      return state
  }
}

export default reducer
