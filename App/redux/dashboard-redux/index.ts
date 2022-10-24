import { Action as ReduxAction } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '..'
import { Card, CardFlip, Error } from '../../models'

export const DashboardSelectors = {
  isLoading : (state: RootState) => state.dashboard.loading,
  isRestarted: (state: RootState) => state.dashboard.isRestarted,
  cards: (state: RootState) => state.dashboard.cards,
  flipCards: (state: RootState) => state.dashboard.flipCards,
}

export enum DashboardTypes {
  RESTART = 'RESTART',
  GENERATE_CARD_PAIRS = 'GENERATE_CARD_PAIRS',
  SAVE_CARDS = 'SAVE_CARDS',
  SAVE_FLIP_CARDS = 'SAVE_FLIP_CARDS',
  FLIP_CARD = 'FLIP_CARD',
}

export type DashboardAction =
  | Restart
  | GenerateCardPairs
  | SaveCards
  | SaveFlipCards
  | FlipCard

type Restart = ReduxAction<DashboardTypes.RESTART>

interface GenerateCardPairs
  extends ReduxAction<DashboardTypes.GENERATE_CARD_PAIRS> {
}

interface SaveCards
  extends ReduxAction<DashboardTypes.SAVE_CARDS> {
    cards: Card[]
}

interface SaveFlipCards
  extends ReduxAction<DashboardTypes.SAVE_FLIP_CARDS> {
    flipCards: CardFlip[]
}

interface FlipCard
  extends ReduxAction<DashboardTypes.FLIP_CARD> {
    value: string
}

const restart = (): Restart => ({
  type: DashboardTypes.RESTART,
})

const generateCardPairs = (): GenerateCardPairs => ({
  type: DashboardTypes.GENERATE_CARD_PAIRS,
})

const saveCards = (cards: Card[]): SaveCards => ({
  type: DashboardTypes.SAVE_CARDS,
  cards: cards,
})

const saveFlipCards = (flipCards: CardFlip[]): SaveFlipCards => ({
  type: DashboardTypes.SAVE_FLIP_CARDS,
  flipCards: flipCards,
})

const flipCard = (cardValue: string): FlipCard => ({
  type: DashboardTypes.FLIP_CARD,
  value: cardValue,
})

export default {
  restart,
  
  generateCardPairs,
  flipCard,
  saveCards,
  saveFlipCards
}
