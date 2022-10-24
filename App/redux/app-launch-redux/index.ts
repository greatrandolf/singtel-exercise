import { Action as ReduxAction } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '..'

export const AppLaunchSelectors = {
  didAppLaunch: (state: RootState) => state.appLaunch.didAppLaunch,
}

export enum AppLaunchTypes {
  APP_LAUNCH = 'APP_LAUNCH',
}

export type AppLaunchAction = 
    | AppLaunch

type AppLaunch = ReduxAction<AppLaunchTypes.APP_LAUNCH>

const appLaunch = (): AppLaunch => ({
  type: AppLaunchTypes.APP_LAUNCH
})

export default {
  appLaunch,
}
