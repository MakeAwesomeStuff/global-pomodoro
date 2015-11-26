import { TICK } from '../constants/ActionTypes'
import { WORK } from '../constants/ActivityTypes'

const initialState =
  {
    activity: WORK,
    activityMinutes: 0
  }

export default function pomodoro(state = initialState, action) {

  switch (action.type) {
    case TICK:
      return action.payload

    default:
      return state
  }
}