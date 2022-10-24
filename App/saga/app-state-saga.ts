import { all, call, put, select, take, takeLatest, takeEvery, delay, cancel, putResolve } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import { AppState, Platform, StyleSheet, Text, View } from "react-native";
import AppStateActions, { AppStateSelectors, AppStateTypes } from '../redux/app-state-redux'
import DashboardActions  from '../redux/dashboard-redux'
import { Auth } from '../models';
import { AuthSelectors } from '../redux/auth-redux';
import { strings } from '../localization/strings'
let currentState = AppState.currentState;

const onAppStateChange = () =>
  eventChannel(emitter => {
    const onHandleAppStateChange = (nextAppState: String) => {
        emitter(nextAppState)
    };
    const subscribeAppStateChange = AppState.addEventListener("change", onHandleAppStateChange);

    return () => subscribeAppStateChange
  })

function * subscribeAppStateChange (): any {
    const onAppStateChangeChannel  = yield call(onAppStateChange)
    yield takeLatest(onAppStateChangeChannel, function* (nextAppState: string) {
        if (nextAppState) {
            yield put(AppStateActions.subscribeAppStateChangeSuccess(nextAppState))
        }
    })

    yield put(AppStateActions.subscribeAppStateChangeSuccess('active'))
    yield take(AppStateTypes.UNSUBSCRIBE_APP_STATE_CHANGE)
    onAppStateChangeChannel.close()
}

export default function() {
    return [
        takeLatest(AppStateTypes.SUBSCRIBE_APP_STATE_CHANGE,  subscribeAppStateChange),
    ]
}
