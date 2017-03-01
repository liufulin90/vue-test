<template>
  <div>
    <div v-for="item in workList">
      {{item.describe}}
    </div>
    <div v-for="item in this.$store.state.projectList">
      {{item.tech}}
    </div>
  </div>
</template>

<script>
  import WorkService from 'services/WorkService'
  export default {
    name: 'work',
    beforeCreate () {
    },
    beforeMount () {
      WorkService.getWorkExperience().then(data => {
        this.$store.state.workList = data.data
      })
      WorkService.getProjectExperience().then(data => {
        this.$store.state.projectList = data.data
      })
    },
    data () {
      console.log(this.$store.state)
      return {
        workList: this.$store.state.workList,
        projectList: this.$store.state.projectList
      }
    }
  }

</script>
