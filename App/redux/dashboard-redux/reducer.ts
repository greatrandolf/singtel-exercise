import { Reducer } from 'redux'
import { DashboardTypes, DashboardAction } from '../dashboard-redux'
import { CardFlip, Card, Error } from '../../models'

type DashboardState = {
  loading: boolean
  isRestarted: boolean
  cards: Card[]
  flipCards: CardFlip[]
}

const INITIAL_STATE: DashboardState = {
  loading: false,
  isRestarted: false,
  cards: [],
  flipCards: [],
}

const getGenerateRandomCardPairs = () => {
  const CARD_PAIRS_VALUE = 12
  let length = CARD_PAIRS_VALUE
  let array: Card[] = Array(length).fill({ value: "" })
  let isGeneratingRandomCards = true
  while(isGeneratingRandomCards) {
    const arrayCount = array.filter((card: Card) => card?.value !== "")
    if (arrayCount.length < length ) {
        const randomCardValue = Math.round(Math.random()*100) // GENERATE CARD VALUE
        const randomCardIndex = Math.round(Math.random()*100 % length) // GENERATE 1ST CARD INDEX
        const randomfPairCardIndex = Math.round(Math.random()*100 % length) // GENERATE 2ND PAIR CARD INDEX
          
        if (randomCardIndex != randomfPairCardIndex && 0 < randomCardValue && randomCardValue < 100) {
          // CHECK IF THE RANDOM CARD VALUE ISN'T YET GENERATED
          if (0 === array.filter((card: Card) => card?.value === `${randomCardValue}`).length) {
            // CHECK IF RANDOM CARD INDEXES IS AVAILABLE TO FILL
            if (randomCardIndex !== array.findIndex((card: Card)  => `${randomCardValue}` === card?.value) &&
                randomfPairCardIndex !== array.findIndex((card: Card)  => `${randomCardValue}` === card?.value) &&
                array[randomCardIndex]?.value === "" && array[randomfPairCardIndex]?.value === "") {
                  const randomCard: Card = { value: `${randomCardValue}`, satisfied: false, shouldFlip: false }
                  array[randomCardIndex] = randomCard
                  array[randomfPairCardIndex] = randomCard
            }
          }
        }
    }
    else 
      isGeneratingRandomCards = false
  }
  return array
}

const setRestarted = (state: DashboardState) => ({ 
  ...state, loading: false, error: null, isRestarted: true
})

const generateCardPairs = (state: DashboardState) => {
  const cards: Card[] = getGenerateRandomCardPairs()
  return ({ ...state, loading: false, error: null, isRestarted: false, cards })
}

const saveCards = (state: DashboardState, cards: Card[]) => ({ 
  ...state, loading: false, error: null, cards 
})

const saveFlipCards = (state: DashboardState, flipCards: CardFlip[]) => ({ 
  ...state, loading: false, error: null, flipCards 
})

const reducer: Reducer<DashboardState, DashboardAction> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case DashboardTypes.RESTART:
      return setRestarted(state)
    case DashboardTypes.GENERATE_CARD_PAIRS:
      return generateCardPairs(state)
    case DashboardTypes.SAVE_CARDS:
      return saveCards(state, action.cards)
    case DashboardTypes.SAVE_FLIP_CARDS:
      return saveFlipCards(state, action.flipCards)
    default:
      return state
  }
}

export default reducer
