<template>
  <div class="hello"  style="width: 1000px;margin: 0 auto">
    <h1>{{ msg }}</h1>
    <div>Enter content: {{ inputData }}</div>
    <el-input v-model="inputData"></el-input>
    <div style="margin: 15px 0;">
      <el-button @click="onClick">toggled</el-button>
    </div>
    <transition>
      <div v-if="isOk">
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
            <div class="el-input__inner" @click="inputFocus" keyType="number">{{keyboardEnterValue}}</div>
            <div class="el-input__inner" @click="inputFocus">{{keyboardEnterValue}}</div>
            <br>
          </el-col>

          <el-col :span="24">
            <lin-keyboard :value="keyboardEnterValue" :show="showKeyboard" :keyType="keyboardType" @onKeyboardChange='onKeyboardChange'></lin-keyboard>
          </el-col>

        </el-row>
      </div>
    </transition>

    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog title="提示" v-model="dialogVisible" size="tiny">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: 'map',
    data () {
      console.log(this.$el)
      let {mapPage} = this.$store.state
      return {
        msg: 'This page is map page',
        inputData: mapPage.inputData,
        isOk: mapPage.isOk,
        commentCount: mapPage.formData.commentCount,
        dialogVisible: false,
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
        if (!target.attributes.keyType) {
          this.keyboardType = null
        } else if (target.attributes.keyType && target.attributes.keyType.nodeValue === 'number') {
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
