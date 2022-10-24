import { Reducer } from 'redux'
import { LoginTypes, LoginAction } from '../login-redux'
import { Auth, Error } from '../../models'

type LoginState = {
  loading: boolean,
}

const INITIAL_STATE: LoginState = {
  loading: false,
}

const signIn = (state: LoginState) => ({
    ...state, loading: true,
})

const signInSuccess = (state: LoginState, auth: any) => ({
  ...state, loading: false, error: null,
})

const signInFailure = (state: LoginState, error?: Error) => ({
  ...state, loading: false, error: error
})

const reducer: Reducer<LoginState, LoginAction> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case LoginTypes.SIGN_IN:
      return signIn(state)
    case LoginTypes.SIGN_IN_SUCCESS:
      return signInSuccess(state, null)
    case LoginTypes.SIGN_IN_FAILURE:
      return signInFailure(state, action.payload.error)
    default:
      return state
  }
}

export default reducer
