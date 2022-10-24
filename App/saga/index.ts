import { all, put, takeLatest, fork } from 'redux-saga/effects'

/* ------------- API SERVICES ------------- */

import { networkSaga } from 'react-native-offline';

export default function* root() {
  yield all([
    
      // NETWORK SAGA
    fork(networkSaga as any, { pingInterval: 20000 }),

    // USER SAGA
    //takeLatest(UserTypes.REQUEST_FETCH_USERS,  fetchUsers, firestoreModule),

    // APP LAUNCH SAGA
    ...require(`./app-launch-saga`).default(),

    // AUTH SAGA
    ...require(`./auth-saga`).default(),

    // APP STATE SAGA
    ...require(`./app-state-saga`).default(),

    // MENU SAGA
    ...require(`./menu-saga`).default(),

    // LOGIN SAGA
    ...require(`./login-saga`).default(),

    // DASHBOARD SAGA
    ...require(`./dashboard-saga`).default(),

  ])
}
