import React, {useEffect,useState,} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {connect, ConnectedProps} from 'react-redux'
import {RootState,RootDispatch} from '../../redux'
import reduxPersist from '../../config/reduxPersist'
import AppStateActions from '../../redux/app-state-redux'
import AppLaunchActions, { AppLaunchSelectors } from '../../redux/app-launch-redux'
import MainNavigators from './MainNavigators'
import { AuthSelectors } from '../../redux/auth-redux'
import { Screen } from '../routes/rootRoutes'

const Stack = createStackNavigator()

// MODAL SCREENS
const RootNavigator = (props: Props) => {

  useEffect(() => {
      props.subscribeAppStateChange()
      
      if (!reduxPersist.active)
        props.appLaunch()

      return () => {
        props.unsubscribeAppStateChange()
      };
  }, [])

  return (
    <NavigationContainer>
        {props.didAppLaunch && 
            <Stack.Navigator>
              <Stack.Group screenOptions={{ headerShown: false, presentation: 'modal' }}>
                <Stack.Screen name={Screen.MainNavigators} component={MainNavigators} 
                                options={{
                                  headerShown:false,
                                }}/>
              </Stack.Group>
            </Stack.Navigator>
        }
    </NavigationContainer>
  )
}

const mapStateToProps = (state: RootState) => ({
    didAppLaunch: AppLaunchSelectors.didAppLaunch(state)
})

const mapDispatchToProps = (dispatch: RootDispatch) =>({
    appLaunch: () => dispatch(AppLaunchActions.appLaunch()),
    subscribeAppStateChange: () => dispatch(AppStateActions.subscribeAppStateChange()),
    unsubscribeAppStateChange: () => dispatch(AppStateActions.unsubscribeAppStateChange()),
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type Props = ConnectedProps<typeof connector>

export default connector(RootNavigator)
