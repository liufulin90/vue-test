<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>Enter content: {{ inputData }}</div>
    <ul>

    </ul>
    <el-input v-model="inputData"></el-input>
    <div style="margin: 15px 0;">
      <el-button @click="onClick">toggled</el-button>
    </div>
    <transition>
      <div v-if="isOk">
        <el-badge value="99+" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'map',
    beforeCreate () {
      console.log('breforeCreate')
    },
    created () {
      console.log('created')
    },
    beforeMount () {
      console.log('beforeMount')
    },
    mounted () {
      console.log(this.$store.state.count)
      console.log('mounted')
    },
    beforeUpdate () {
      console.log('berforeUpdate')
    },
    updated () {
      this.$store.dispatch('incrementAction', {count: 1})
      this.$store.state.mapPage.inputData = this.inputData
      console.log('updated count:', this.$store.state.count)
      console.log('updated')
    },
    activated () {
      console.log('activated')
    },
    deactivated () {
      console.log('deactived')
    },
    beforeDestroy () {
      console.log('beforeDestroy')
    },
    destroyed () {
      console.log(this.$store.state.count)
      console.log('destroyed')
    },
    data () {
      let {mapPage} = this.$store.state
      return {
        msg: 'This page is map page',
        inputData: mapPage.inputData,
        isOk: mapPage.isOk
      }
    },
    methods: {
      onClick () {
        this.$store.dispatch('changeViewAction')
        this.$data.isOk = this.$store.state.mapPage.isOk
        const sleep = (timeout = 1000) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve()
            }, timeout)
          })
        }
        const func = () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(123)
            }, 1000)
          })
        }
        const testAsync = async () => {
          let f1 = await func()
          console.log('f1', f1)
          let f2 = await func()
          console.log('f2', f2)
          await sleep(2000)
          console.log(222)
        }
        testAsync()
      }
    },
    watch: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
