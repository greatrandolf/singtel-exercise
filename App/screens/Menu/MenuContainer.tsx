import React, { useEffect, useState } from 'react'
import { Platform, Alert } from 'react-native'
import { connect, ConnectedProps, } from 'react-redux'
import { RootState, RootDispatch } from '../../redux'
import {StackActions ,useNavigation, DrawerActions, CommonActions } from '@react-navigation/native'
import { Screen as MainScreen } from '../../navigation/routes/mainRoutes'
import { Screen } from '../../navigation/routes/rootRoutes'
import Menu from './Menu'
import DashboardActions, { DashboardSelectors } from '../../redux/dashboard-redux'

const MenuContainer = (props: Props) =>  {
    const navigation = useNavigation()

    const onNavigateMenuItem = (item: string) => {
        if(Platform.OS !== 'ios')
            navigation.dispatch(DrawerActions.toggleDrawer());
            
        setTimeout(() => {
            if (item === 'Profile')
                navigation.dispatch(StackActions.push(Screen.ProfileNavigators));
            else if (item === 'Restart')
                props.restart()
            
        }, 500)
    }

    return (
        <Menu   onNavigateMenuItem={onNavigateMenuItem}
                { ...props } />
    )
}

const mapStateToProps = (state: RootState) => ({

})
const mapDispatchToProps = (dispatch: RootDispatch) => ({
    restart: () => dispatch(DashboardActions.restart())
})

const connector = connect(mapStateToProps, mapDispatchToProps)
interface Props extends ConnectedProps<typeof connector> {
    route: any
}

export default connector(MenuContainer)

