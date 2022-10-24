import { all, call, delay, put, putResolve, select, takeLatest, take } from 'redux-saga/effects'
import { ApiAction, ApiLogin } from '../services'
import AuthActions from '../redux/auth-redux'
import LoginActions, { LoginTypes } from '../redux/login-redux'
import { getUniqueId } from 'react-native-device-info'
import { Auth } from '../models'
import api from '../services/shared/login-service'

function * signIn (api: ApiLogin, action: ApiAction): Event {
    let uniqueId = getUniqueId();
    const { userName, pin } = action
    const response = yield call(api.signIn, userName, pin)

    yield put(
        response.matchWith({
            Ok: ({ value }: { value: any}) => LoginActions.signInSuccess(value),
            Error: ({ value }: { value: any}) => LoginActions.signInFailure(value)
        })
    )
}

function * signInSuccess (api: ApiLogin, action: ApiAction): Event {
    const { auth } = action.payload
    const authSuccess: Auth = {
        accountId: auth.accountId,
        authData: auth.authData,
        verified: auth.verified,
    }
    yield put(AuthActions.signInAuthSuccess(authSuccess))
}

export default function() {
    return [
        takeLatest(LoginTypes.SIGN_IN_SUCCESS,  signInSuccess, api),
        takeLatest(LoginTypes.SIGN_IN,  signIn, api),
    ]
}
