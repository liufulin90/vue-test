<template>
  <div>
    <div v-for="item in workList">
      {{item.describe}}
    </div>
    <div v-for="item in projectList">
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
