<template>
  <div>
    <div v-for="item in workList">
      {{item.describe}}
    </div>
    <div v-for="item in projectList">
      {{item.tech}}
    </div>

    <el-button>asdf</el-button>

    <el-timeline icon="setting">
      <el-timeline-item>this is my timeline111</el-timeline-item>
      <el-timeline-item>this is my timeline222</el-timeline-item>
    </el-timeline>

  </div>
</template>

<script>
  import WorkService from 'services/WorkService'
  import Vue from 'vue'
  import elTimeline from '../timeline/'
//  Timeline.install(Vue)
  Vue.use(elTimeline)
  export default {
    name: 'work',
    beforeCreate () {
    },
    beforeMount () {
      WorkService.getWorkExperience().then(data => {
        this.workList = data.data
      })
      WorkService.getProjectExperience().then(data => {
        this.projectList = data.data
      })
    },
    beforeUpdate () {
    },
    data () {
      console.log(this.$store.state)
      return {
        workList: [],
        projectList: []
      }
    }
  }

</script>
