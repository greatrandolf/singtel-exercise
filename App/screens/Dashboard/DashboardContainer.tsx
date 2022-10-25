import React, { useRef, useEffect, useState, useCallback, } from 'react'
import { Alert, Platform, AppState, Linking } from 'react-native'
import { connect, ConnectedProps, } from 'react-redux'
import { RootState, RootDispatch } from '../../redux'
import {StackActions ,useNavigation, DrawerActions, CommonActions, useFocusEffect } from '@react-navigation/native'
import DashboardActions, { DashboardSelectors } from '../../redux/dashboard-redux'
import { Card, } from '../../models'
import Dashboard from './Dashboard'

const DashboardContainer = (props: Props) =>  {
    const navigation = useNavigation()
    const steps = useRef<Number>(0)

    const toggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer())
    }

    const onFlipChange = async (value: string) => {
        steps.current = Number(steps.current) + 1
        props.flipCard(value)
    }

    const onFlipCallBack = (card: Card, callback: Function) => {
        if (callback && !card?.satisfied && card?.shouldFlip) {
          callback(card?.satisfied)
        }
    }

    const onRestart = () => {
        steps.current = 0
    }

    useFocusEffect(
        useCallback(() => {
            if (props.isRestarted)
                onRestart()
        }, [props.isRestarted])
    )

    useFocusEffect(
        useCallback(() => {
            let satisfiedCards = props.cards.filter((card: Card) => card.satisfied)
            let toFlipCards = props.cards.filter((card: Card) => !card.satisfied)
            if (toFlipCards.length === 0 && 0 < satisfiedCards.length) {
                Alert.alert(
                    `Congratulations`,
                    `You win this game by ${steps.current} steps`,
                    [ {
                        text: `Try another round`,
                        onPress: () => props.restart()
                    }],
                    
                );
            }
        }, [props.cards])
    )

    return (
        <Dashboard  toggleDrawer={toggleDrawer}
                    onFlipChange={onFlipChange}
                    onFlipCallBack={onFlipCallBack}
                    steps={steps.current}
                     { ...props } />
    )
}

const mapStateToProps = (state: RootState) => ({
    cards: DashboardSelectors.cards(state),
    isRestarted: DashboardSelectors.isRestarted(state),
})
const mapDispatchToProps = (dispatch: RootDispatch) => ({
    restart: () => dispatch(DashboardActions.restart()),
    flipCard: (cardValue: string) => dispatch(DashboardActions.flipCard(cardValue)),
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type Props = ConnectedProps<typeof connector>

export default connector(DashboardContainer)
