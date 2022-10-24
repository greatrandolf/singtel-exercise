import {all, call, put, select, take, takeLatest, takeEvery, delay, putResolve} from 'redux-saga/effects'
import {Alert, Platform} from "react-native";
import { eventChannel, END } from 'redux-saga'
import { ApiAction, ApiDashboard } from '../services'
import AuthActions, { AuthSelectors } from '../redux/auth-redux'
import DashboardActions, { DashboardSelectors, DashboardTypes } from '../redux/dashboard-redux'
import api from '../services/shared/dashboard-service'
import Immutable from 'seamless-immutable'

function * restart (action: ApiAction): any {
    let updatedCards = yield select(DashboardSelectors.cards)
    let cardGameList = Immutable.asMutable(updatedCards)

    const newCardGameList = cardGameList.map((cardGame: any) =>
         ({...cardGame, satisfied: false, shouldFlip: true })
    )
    
    yield put(DashboardActions.saveCards(newCardGameList))
    yield delay(800)
    yield put(DashboardActions.saveFlipCards([]))
    yield put(DashboardActions.generateCardPairs())
}

function * flipCard (action: ApiAction): any {
    const { value }: { value: string} = action
    const flipCards = yield select(DashboardSelectors.flipCards)

    let newFlipList = Immutable.asMutable(flipCards)
    let singlePair = newFlipList.find((flipItem: any) => 1 === flipItem?.pairs?.length )
    if (singlePair) {
        let flipPairIndex = newFlipList.findIndex((flipItem: any) => 1 === flipItem?.pairs?.length )
        let isMatched = singlePair?.pairs?.find((findPair: any) => findPair === value)
        let twoPairs = { 
                        pairs: [...singlePair?.pairs, value], 
                        satisfied: isMatched ? true : false,
                        shouldFlip: isMatched ? false : true,
                        open: true,
                        }
        newFlipList[flipPairIndex] = twoPairs
        yield put(DashboardActions.saveFlipCards(newFlipList))

        yield delay(800)
        let updatedFlipCards = yield select(DashboardSelectors.flipCards)
        let updatedCards = yield select(DashboardSelectors.cards)
        let flipList = Immutable.asMutable(updatedFlipCards)
        let cardGameList = Immutable.asMutable(updatedCards)

        let openedFlipList: any = []
        let updateFlipList = flipList.map((flipItem: any) => {
            if (2 === flipItem?.pairs?.length && flipItem?.open) {
                openedFlipList = flipItem?.pairs
                return ({ ...flipItem, open: false})
            }
            return ({...flipItem, shouldFlip: false})
        })
        const newCardGameList = cardGameList.map((cardGame: any) => {
            if (!cardGame?.satisfied) {
                let satisfied = 2 === openedFlipList.filter((filterItem: any) => filterItem === cardGame?.value).length
                let shouldFlip = openedFlipList.find((flipItem: any) => flipItem === cardGame?.value) ? true : false

                return ({...cardGame, satisfied, shouldFlip })
            }
            return ({ ...cardGame, shouldFlip: false, })
        })
        yield put(DashboardActions.saveCards(newCardGameList))
        yield put(DashboardActions.saveFlipCards(updateFlipList))
    }
    else {
        newFlipList.push({ pairs: [value], open: true, satisfied: false, shouldFlip: false })
        yield put(DashboardActions.saveFlipCards(newFlipList))
    }
}

export default function() {
    return [
        takeLatest(DashboardTypes.RESTART, restart),
        takeEvery(DashboardTypes.FLIP_CARD, flipCard),
    ]
}
