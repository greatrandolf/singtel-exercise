import { Reducer } from 'redux'
import { AuthTypes, AuthAction } from '../auth-redux'
import { Auth } from '../../models'

type AuthState = {
  loading: boolean
  auth?: Auth
}

const INITIAL_STATE: AuthState = {
  loading: false,
}

const signInSuccess = (state: AuthState, auth: Auth) => ({
  ...state, loading: false, auth: auth
})

const reducer: Reducer<AuthState, AuthAction> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_AUTH_SUCCESS:
      return signInSuccess(state, action.payload.auth)
    default:
      return state
  }
}

export default reducer
