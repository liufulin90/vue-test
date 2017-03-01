<template>
  <div>
    <div v-for="item in this.$store.state.workList">
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
    data () {
      WorkService.getWorkExperience().then(data => {
        this.$store.state.workList = data.data
      })
      WorkService.getProjectExperience().then(data => {
        this.$store.state.projectList = data.data
      })
      console.log(this.$store.state)
      return {}
    }
  }

</script>
