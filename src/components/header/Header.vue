<template>
  <div class="row">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to="/home">Home</router-link>
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
    </el-menu>
  </div>
</template>

<style scoped>
  a{
    text-underline: none;
  }
</style>

<script>
  export default {
    data () {
      return {
        theme1: 'dark'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
