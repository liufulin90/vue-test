/**
 * 导入所有组件
 */
import linTimeline from './timeline/'
import {linKeyboardChar, linKeyboardNumber} from './keyboard/'

let components = {
  linTimeline,
  linTimelineItem: linTimeline.Item,
  linKeyboardChar,
  linKeyboardNumber
}

/**
 * 添加组件的安装方法
 */
for (let component of Object.values(components)) {
  if (!component.install && component.name) {
    component.install = (vue) => {
      vue.component(component.name, component)
    }
  }
}

/**
 * 安装所有组件， 如果被安装了则不用安装。
 *
 * Vue.use(xxx)
 * 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法将被作为 Vue 的参数调用。
 * 当 install 方法被同一个插件多次调用，插件将只会被安装一次。
 * @param vue
 */
const install = function (vue) {
  if (install.installed) return
  for (let component of Object.values(components)) {
    if (component.install) {
      vue.use(component)
    }
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
