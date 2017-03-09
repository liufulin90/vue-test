// 根级别的 action
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
import {mapAction} from './modules/mapStore'

export default {
  ...mapAction
}
