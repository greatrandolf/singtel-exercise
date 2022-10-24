import { Action as ReduxAction } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../../redux'
import { Auth, Error } from '../../models'

export const AuthSelectors = {
    auth : (state: RootState) => state.auth.auth,
}

export enum AuthTypes {
  SIGN_IN_AUTH_SUCCESS = 'SIGN_IN_AUTH_SUCCESS',
}

export type AuthAction =
  | SignInAuthSuccess

interface SignInAuthSuccess
  extends ReduxAction<AuthTypes.SIGN_IN_AUTH_SUCCESS> {
  payload: {
    auth: Auth
  }
}

const signInAuthSuccess = (auth: Auth): SignInAuthSuccess => ({
  type: AuthTypes.SIGN_IN_AUTH_SUCCESS,
  payload: { auth }
})

export default {
  signInAuthSuccess,
}
