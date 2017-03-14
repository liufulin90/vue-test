/**
 * Created by liufulin on 17-3-14.
 */
import workService from '../../services/WorkService'
import * as types from './types'

export default {
  state: {
    workList: [],
    projectList: [],
    isListShow: true
  },
  actions: {
    [types.GET_WORK_LIST_ACTION] ({commit, state}, payload) {
      workService.getWorkExperience().then(data => {
        commit(types.GET_WORK_LIST_MUTATION, data.data)
      })
    },
    [types.GET_PROJECT_LIST_ACTION] ({commit, state}, payload) {
      workService.getProjectExperience().then(data => {
        commit(types.GET_PROJECT_LIST_MUTATION, data.data)
      })
    }
  },
  mutations: {
    [types.GET_WORK_LIST_MUTATION] (state, payload) {
      state.workList = payload
    },
    [types.GET_PROJECT_LIST_MUTATION] (state, payload) {
      state.projectList = payload
    }
  }
}
