import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigators from './TabNavigators'
import Home from '../../../../screens/Dashboard'
import Menu from '../../../../screens/Menu'

import { Screen } from '../../../routes/drawerRoutes'
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={props => <Menu route={null} {...props} />}
                    screenOptions={{ headerShown: false, drawerType: 'front' }}>

    <Drawer.Screen name={Screen.Contests} component={TabNavigators} />
  </Drawer.Navigator>
)

export default DrawerNavigator
//https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da
