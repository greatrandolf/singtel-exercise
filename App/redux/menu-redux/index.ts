import { Action as ReduxAction } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '..'
import { Menu, Error } from '../../models'

export const MenuSelectors = {
    isLoading : (state: RootState) => state.menu.loading
}

export enum MenuTypes {
  SIGN_OUT = 'SIGN_OUT',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE',
}

export type MenuAction =
  | SignOut
  | SignOutSuccess
  | SignOutFailure

type SignOut = ReduxAction<MenuTypes.SIGN_OUT> 

interface SignOutSuccess
  extends ReduxAction<MenuTypes.SIGN_OUT_SUCCESS> {
  payload: {
    
  }
}

interface SignOutFailure
  extends ReduxAction<MenuTypes.SIGN_OUT_FAILURE> {
  payload: {
    error: Error
  }
}

const signOut = (): SignOut => ({
  type: MenuTypes.SIGN_OUT,
})
const signOutSuccess = (menu: Menu): SignOutSuccess => ({
  type: MenuTypes.SIGN_OUT_SUCCESS,
  payload: { menu }
})

const signOutFailure = (error: Error): SignOutFailure => ({
  type: MenuTypes.SIGN_OUT_FAILURE,
  payload: { error }
})

export default {
  signOut,
  signOutSuccess,
  signOutFailure,
}
