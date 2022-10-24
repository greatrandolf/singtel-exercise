import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import {connect, ConnectedProps} from 'react-redux'
import {RootState,RootDispatch} from '../../../redux'
import { AuthSelectors } from '../../../redux/auth-redux'

import { createStackNavigator } from '@react-navigation/stack'
import DrawerNavigators from './DrawerNavigors'
import TabNavigators from './DrawerNavigors/TabNavigators'

import Login from '../../../screens/Login'

import { Screen } from '../../routes/mainRoutes'

const Stack = createStackNavigator()
const showHeader = false

const MainNavigator = (props: Props) => {
    const shouldDrawer = Platform.OS !== 'ios'

    return (
        <Stack.Navigator>
            {/* <Stack.Screen  name={Screen.Login} component={Login} 
                            options={{
                                headerShown:showHeader,
                                animationEnabled: false
                            }}/> */}

            {/* CONTESTS SCREEN */}
            <Stack.Screen   name={Screen.DrawerNavigator} component={DrawerNavigators} 
                            options={{
                                headerShown:showHeader,
                                animationEnabled: false
                            }} />
        </Stack.Navigator>
    )
}

const mapStateToProps = (state: RootState) => ({
    auth: AuthSelectors.auth(state),
})

const mapDispatchToProps = (dispatch: RootDispatch) =>({

})

const connector = connect(mapStateToProps, mapDispatchToProps)
type Props = ConnectedProps<typeof connector>

export default connector(MainNavigator)