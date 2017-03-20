<template>
    <div>
        home page
        <el-button @click="showLoading">显示loading</el-button>
        <el-button @click="addmenu">add menu</el-button>
    </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_MENUS} from 'store/globalStore'
  export default {
    data () {
      return {
        fullScreenLoading: true
      }
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_MENUS]),
      showLoading () {
        let {pending} = this.$store.state._global
        if (pending) return
        this.CHANGE_PENDING(true)
        setTimeout(() => {
          this.CHANGE_PENDING(false)
        }, 2000)
      },
      addmenu () {
        this.CHANGE_MENUS()
      }
    }
  }
</script>
