import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects'
import { ApiAction, ApiMenu } from '../services'
import AuthActions, { AuthSelectors } from '../redux/auth-redux'
import DashboardActions from '../redux/dashboard-redux'
import MenuActions, { MenuTypes } from '../redux/menu-redux'
import { Platform } from 'react-native'
import api from '../services/shared/dashboard-service'

function * signOut (api: ApiMenu, action: ApiAction) {
    yield put(DashboardActions.clearData())
    let auth: any = null
    yield put(AuthActions.signInAuthSuccess(auth))
}

export default function() {
    return [
        takeLatest(MenuTypes.SIGN_OUT,  signOut, api),
    ]
}
