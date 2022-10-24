import { call, put, select, takeLatest } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import AppLaunchActions, { AppLaunchTypes } from '../redux/app-launch-redux'
import { AuthSelectors } from '../redux/auth-redux'
import DashboardActions from '../redux/dashboard-redux'
import { Auth, } from '../models'
import Config from '../config/debugConfig'

function * appLaunch () {
    if (Config.useReactotron) {
        console.tron = console
    }
    // GENERATE CARD PAIRS WHEN APP LAUNCH
    yield put(DashboardActions.generateCardPairs())
}

export default function() {
    return [
        takeLatest(AppLaunchTypes.APP_LAUNCH, appLaunch),
    ]
}