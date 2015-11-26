import * as types from '../constants/ActionTypes'
import { WORK, REST } from '../constants/ActivityTypes'

export function tick(time) {
  // A pomodoro is 25 minutes work + 5 minutes rest
  const minutes = (time % (1000*60*30)) / 1000 / 60

  return {
    type: types.TICK,
    payload: {
      activity: (minutes < 25) ? WORK : REST,
      activityMinutes: (minutes < 25) ? 25 - minutes : 30 - minutes
    }
  }
}
