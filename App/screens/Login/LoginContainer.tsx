import React, { useCallback, useEffect, useState } from 'react'
import { connect, ConnectedProps, useStore, } from 'react-redux'
import { RootState, RootDispatch } from '../../redux'
import {StackActions ,useNavigation, DrawerActions, useFocusEffect, CommonActions} from '@react-navigation/native'
import { Screen } from '../../navigation/routes/mainRoutes'
import { Screen as RootScreen } from '../../navigation/routes/rootRoutes'
import Login from './Login'
import { Alert } from 'react-native'

const LoginContainer = (props: Props) =>  {
    const navigation = useNavigation()

    useEffect(() => {
    }, [])

    return (
        <Login  { ...props } />
    )
}

const mapStateToProps = (state: RootState) => ({

})
const mapDispatchToProps = (dispatch: RootDispatch) => ({

})

const connector = connect(mapStateToProps, mapDispatchToProps)
interface Props extends ConnectedProps<typeof connector> {
    route: any
}

export default connector(LoginContainer)

