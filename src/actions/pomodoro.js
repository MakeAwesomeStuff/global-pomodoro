import * as types from '../constants/ActionTypes'

export function tick(time) {
  return { type: types.TICK, time }
}
