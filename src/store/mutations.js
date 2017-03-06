// 根级别的 mutation
// mutation 必须是同步函数

const incrementMt = (state, payload) => {
  state.count = payload.count
}

const changeViewMt = (state) => {
  console.log(state.mapPage.isOk)
  state.mapPage.isOk = !state.mapPage.isOk
  console.log('changeViewMt @@')
}
export {
  incrementMt,
  changeViewMt
}
