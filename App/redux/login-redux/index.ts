import { Action as ReduxAction } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '..'
import { Auth, Error } from '../../models'

export const LoginSelectors = {
    isLoading: (state: RootState) => state.login.loading,
}

export enum LoginTypes {
  SIGN_IN = 'SIGN_IN',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'
}

export type LoginAction =
  | SignIn
  | SignInSuccess
  | SignInFailure

interface SignIn
  extends ReduxAction<LoginTypes.SIGN_IN> {
  userName: string,
  pin: string,
}

interface SignInSuccess
  extends ReduxAction<LoginTypes.SIGN_IN_SUCCESS> {
  payload: {
    auth: Auth
  }
}

interface SignInFailure
  extends ReduxAction<LoginTypes.SIGN_IN_FAILURE> {
  payload: {
    error: Error
  }
}

const signIn = (userName: string, pin: string): SignIn => ({
  type: LoginTypes.SIGN_IN,
  userName: userName,
  pin: pin,
})

const signInSuccess = (auth: Auth): SignInSuccess => ({
  type: LoginTypes.SIGN_IN_SUCCESS,
  payload: { auth }
})

const signInFailure = (error: Error): SignInFailure => ({
  type: LoginTypes.SIGN_IN_FAILURE,
  payload: { error }
})

export default {
  signIn,
  signInSuccess,
  signInFailure,
}
