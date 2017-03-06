// 根级别的 action
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。

const incrementAction = ({commit, state}, payload) => {
  payload.count++
  commit('incrementMt', payload)
  setTimeout(function () {
    commit('incrementMt', payload)
  }, 1000)
}

const changeViewAction = (context) => {
  console.log('changeViewAction @@context', context)
  context.commit('changeViewMt')
}
export {
  incrementAction,
  changeViewAction
}
