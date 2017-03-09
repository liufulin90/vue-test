<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>Enter content: {{ inputData }}</div>
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
            <el-input v-model="keyboardEnterValue" @focus="inputFocus"></el-input>
            <div class="el-input__inner" @click="inputFocus" type="number">{{keyboardEnterValue}}</div>
            <div class="el-input__inner" @click="inputFocus">{{keyboardEnterValue}}</div>
            <br>
          </el-col>

          <el-col :span="24">
            <lin-keyboard :value="keyboardEnterValue" :show="showKeyboard" :type="keyboardType" @onKeyboardChange='onKeyboardChange'></lin-keyboard>
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
        keyboardEnterValue: '',
        showKeyboard: false,
        keyboardType: 'char'
      }
    },
    methods: {
      onKeyboardChange (val, isShow, type) {
        this.keyboardEnterValue = val
        this.showKeyboard = isShow
        this.keyboardType = type
      },
      inputFocus (e) {
        this.showKeyboard = true
        let target = e.originalTarget || e.target
        if (!target.attributes.type) {
          this.keyboardType = null
        } else if (target.attributes.type && target.attributes.type.nodeValue === 'number') {
          this.keyboardType = 'number'
        } else {
          this.keyboardType = 'char'
        }
        this.$forceUpdate()
      },
      onClick () {
        this.$store.dispatch('changeViewAction')
        this.$data.isOk = this.$store.state.mapPage.isOk
      },
      commitData () {
        console.log(this)
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
//      console.log('mounted')
    },
    beforeUpdate () {
//      console.log('berforeUpdate')
    },
    updated () {
      this.$store.dispatch('incrementAction', {count: 1})
      this.$store.state.mapPage.inputData = this.inputData
      this.$store.state.mapPage.formData.commentCount = this.$data.commentCount
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
