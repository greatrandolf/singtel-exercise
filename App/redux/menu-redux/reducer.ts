import { Reducer } from 'redux'
import { MenuTypes, MenuAction } from '../menu-redux'
import { Menu, Error } from '../../models'

type MenuState = {
  loading: boolean
}

const INITIAL_STATE: MenuState = {
  loading: false,
}

const setLoading = (state: MenuState) => ({
    ...state, loading: true,
})

const failure = (state: MenuState, error: Error) => ({
    ...state, loading: false, error: error
})

const reducer: Reducer<MenuState, MenuAction> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
