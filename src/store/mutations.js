import * as Types from './types'

export default {
  [Types.ADD](state) {
    state.count++
  },
  [Types.SUB](state) {
    state.count--
  },
}
