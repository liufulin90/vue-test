<template>
    <div>
        home page
        <el-button @click="showLoading">显示loading</el-button>
    </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING} from 'store/globalStore'
  export default {
    data () {
      return {
        fullScreenLoading: true
      }
    },
    methods: {
      ...mapActions([CHANGE_PENDING]),
      showLoading () {
        let {pending} = this.$store.state._global
        if (pending) return
        this.CHANGE_PENDING(true)
        setTimeout(() => {
          this.CHANGE_PENDING(false)
        }, 2000)
      }
    }
  }
</script>
