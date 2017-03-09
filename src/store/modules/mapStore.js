/**
 * Created by liufulin on 17-3-9.
 */

// mutations
/**
 *
 * @param state
 * @param payload
 */
const incrementMt = (state, payload) => {
  state.count = payload.count
}

/**
 *
 * @param state
 */
const changeViewMt = (state) => {
  console.log(state.mapPage.isOk)
  state.mapPage.isOk = !state.mapPage.isOk
  console.log('changeViewMt @@')
}
export const mapMutation = {
  incrementMt,
  changeViewMt
}

// actions
/**
 *
 * @param commit
 * @param state
 * @param payload
 */
const incrementAction = ({commit, state}, payload) => {
  payload.count++
  commit('incrementMt', payload)
  setTimeout(function () {
    commit('incrementMt', payload)
  }, 1000)
}

/**
 *
 * @param context
 */
const changeViewAction = (context) => {
  console.log('changeViewAction @@context', context)
  context.commit('changeViewMt')
}

export const mapAction = {
  incrementAction,
  changeViewAction
}
