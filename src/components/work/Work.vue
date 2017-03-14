<template>
  <div>
    <div style="width: 1000px;margin: 0 auto;">
      <br><br>
      <el-button @click="toggleList">show</el-button>
      <br><br>
      <div v-if="isListShow">
        <lin-timeline>
          <div v-for="(item, index) in workList">
            <lin-timeline-item :color="item.isPrimary ? '#f00' : ''" :last="index == workList.length-1 ? true : false">
              <p>{{item.timeSlot}}</p>
              <p>{{item.companyName}}</p>
              <p>{{item.job}}</p>
              <p>{{item.describe}}</p>
            </lin-timeline-item>
          </div>
        </lin-timeline>
        <br><br>
        <lin-timeline>
          <div v-for="(item, index) in projectList">
            <lin-timeline-item :color="item.isPrimary ? '#f00' : ''" :last="index == projectList.length-1 ? true : false">
              <p>{{item.timeAndName}}</p>
              <p>{{item.env}}</p>
              <p>{{item.tech}}</p>
              <p>{{item.projectDes}}</p>
              <p>{{item.jobDes}}</p>
            </lin-timeline-item>
          </div>
        </lin-timeline>
      </div>
    </div>

  </div>
</template>

<script>
//  import {GET_WORK_LIST_ACTION, GET_PROJECT_LIST_ACTION} from 'store/modules/workStore'
  import * as types from 'store/modules/types'
  export default {
    name: 'work',
    beforeCreate () {
      this.$store.dispatch(types.GET_WORK_LIST_ACTION)
      this.$store.dispatch(types.GET_PROJECT_LIST_ACTION)
    },
    beforeMount () {
    },
    mounted () {
      this.$forceUpdate()
    },
    beforeUpdate () {
      let {workList, projectList} = this.$store.state.workPage
      this.workList = workList
      this.projectList = projectList
    },
    data () {
      let {isListShow, workList, projectList} = this.$store.state.workPage
      return {
        workList: workList,
        projectList: projectList,
        isListShow: isListShow
      }
    },
    methods: {
      toggleList () {
        this.$data.isListShow = this.$store.state.workPage.isListShow = !this.$data.isListShow
      }
    }
  }

</script>
