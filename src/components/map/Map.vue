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
      <div v-if="isOk" style="width: 1000px;margin: 0 auto">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple-dark">
              <el-slider v-model="commentCount"></el-slider>
            </div>
          </el-col>
          <el-col :span="6">
            <el-badge :value="commentCount > 99 ? '99+' : commentCount" class="item">
              <el-button size="small">评论</el-button>
            </el-badge>
          </el-col>
          <el-col :span="6">
            <el-button size="small" @click="commitData">submit</el-button>
          </el-col>

          <el-col>
            <el-input v-model="keyboardEnterValue"></el-input>
          </el-col>

          <el-col :span="24">
            <div>
              <lin-keyboard-char :value="keyboardEnterValue" @onKeyboardChange='onKeyboardChange'></lin-keyboard-char>
            </div>
          </el-col>

        </el-row>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'map',
    data () {
      let {mapPage} = this.$store.state
      return {
        msg: 'This page is map page',
        inputData: mapPage.inputData,
        isOk: mapPage.isOk,
        commentCount: mapPage.formData.commentCount,
        keyboardEnterValue: '@'
      }
    },
    methods: {
      onKeyboardChange (msg) {
        this.keyboardEnterValue = msg
      },
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
      },
      commitData () {

      }
    },
    beforeCreate () {
//      console.log('breforeCreate')
    },
    created () {
//      console.log('created')
    },
    beforeMount () {
//      console.log('beforeMount')
    },
    mounted () {
      console.log(this.$store.state.count)
//      console.log('mounted')
    },
    beforeUpdate () {
//      console.log('berforeUpdate')
    },
    updated () {
      this.$store.dispatch('incrementAction', {count: 1})
      this.$store.state.mapPage.inputData = this.inputData
      this.$store.state.mapPage.formData.commentCount = this.$data.commentCount
//      console.log('updated', this.$data.keyboardEnterValue)
    },
    activated () {
//      console.log('activated')
    },
    deactivated () {
//      console.log('deactived')
    },
    beforeDestroy () {
//      console.log('beforeDestroy')
    },
    destroyed () {
//      console.log('destroyed')
    }
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
