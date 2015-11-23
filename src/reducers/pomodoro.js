import { TICK } from '../constants/ActionTypes'

const initialState =
  {
    num: 1,
    activity: 'Work'
  }


export default function pomodoro(state = initialState, action) {
  switch (action.type) {
    case TICK:
      return {
        num: 2,
        activity: 'Rest'
      }

    default:
      return state
  }
}