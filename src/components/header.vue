<template>
  <div class="row">
    <el-menu theme="dark" default-active={defaultActive} class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div v-for="item in this.$store.state.ownMenus">
        <el-submenu :index="item.key" v-if="item.children">
          <template slot="title">{{item.name}}</template>
          <el-menu-item :index="sub.key" v-for="sub in item.children">{{sub.name}}</el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.key" v-else>
          <router-link :to="item.path">{{item.name}}</router-link>
        </el-menu-item>
      </div>
      <!--<el-menu-item index="1">
        <router-link to="/index">Home</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/work">Work</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/map">Map</router-link>
        </el-menu-item>
      <el-submenu index="4">
        <template slot="title">Games & Animate</template>
        <el-menu-item index="4-1">Rotate</el-menu-item>
        <el-menu-item index="4-2">Canvas</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">Submenu</template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
      </el-submenu>
      -->
      <div class="signout">
        <a @click="signout">退出</a>
      </div>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
  a{
    text-underline: none;
  }
  .signout{
    float: right;
    line-height: 60px;
    color: white;
    margin-right: 30px;
    a{
      color: white;
    }
  }
</style>

<script>
  import { mapActions } from 'vuex'
  import { USER_SIGNOUT } from '../store/userStore'
  import {CHANGE_PENDING} from 'store/globalStore'
  import * as jst from 'js-common-tools'
  export default {
    mounted () {
      const {user, _global} = this.$store.state
      const ownMenus = _global.menus.filter((item) => {
        return jst.inArray(item.key, user.power)
      })
      Object.assign(this.$store.state, {ownMenus: ownMenus})

      console.log(this.$store.state)
      this.$forceUpdate()
    },
    beaforeUpdate () {
      console.log('header update beafore')
    },
    data () {
      return {
        theme1: 'dark',
        defaultActive: this.$store.state.menu.defaultActive
      }
    },
    methods: {
      ...mapActions([USER_SIGNOUT, CHANGE_PENDING]),
      handleSelect (key, keyPath) {
//        console.log(key, keyPath)
      },
      signout () {
        const fn = async () => {
          this.CHANGE_PENDING(true)
          await this.USER_SIGNOUT()
          console.log('成功退出')
          this.$message({
            type: 'success',
            message: '成功退出!'
          })
          this.CHANGE_PENDING(false)
          this.$router.replace({path: 'login'})
        }
        this.$confirm('确认退出?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 确定处理事件
          fn()
        }).catch(() => {
          // 取消处理事件
//          this.$message({ type: 'info', message: '已取消退出' })
        })
      }
    }
  }
</script>
