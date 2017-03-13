<template>
  <div v-if="show">
    <div class="kb-char-wrap" v-if="isCharKeyboard">
      <ul>
        <li class="kb-char-item">
          <span @click="enterChar">{{charUpperCase ? 'Q' : 'q'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'W' : 'w'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'E' : 'e'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'R' : 'r'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'T' : 't'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'Y' : 'y'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'U' : 'u'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'I' : 'i'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'O' : 'o'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'P' : 'p'}}</span>
        </li>
        <li class="kb-char-item">
          <span @click="enterChar">{{charUpperCase ? 'A' : 'a'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'S' : 's'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'D' : 'd'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'F' : 'f'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'G' : 'g'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'H' : 'h'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'J' : 'j'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'K' : 'k'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'L' : 'l'}}</span>
        </li>
        <li class="kb-char-item">
          <b class="kb-char-middle" :class="charUpperCase ? 'kb-char-active' : ''" @click="changeChar">▲</b>
          <span @click="enterChar">{{charUpperCase ? 'Z' : 'z'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'X' : 'x'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'C' : 'c'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'V' : 'v'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'B' : 'b'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'N' : 'n'}}</span>
          <span @click="enterChar">{{charUpperCase ? 'M' : 'm'}}</span>
          <span class="kb-char-middle" :class="value ? '' : 'kb-char-disabled'" @click="delChar">del</span>
        </li>
        <li class="kb-char-item">
          <span class="kb-char-large" :class="isOnlyOneKeyboard ? 'kb-char-disabled' : ''" @click="changeKeyboard">.?123</span>
          <span class="kb-char-large" :class="value ? '' : 'kb-char-disabled'" @click="clearChar">clear</span>
          <span class="kb-char-space" @click="enterChar($event, '')">space</span>
          <span class="kb-char-large" @click="closeKeyboard">{{value ? 'OK' : 'CLOSE'}}</span>
        </li>
      </ul>
    </div>
    <div class="kb-char-wrap" v-else>
      <ul>
        <li class="kb-char-item">
          <span @click="enterChar">1</span>
          <span @click="enterChar">2</span>
          <span @click="enterChar">3</span>
          <span class="kb-char-large" :class="value ? '' : 'kb-char-disabled'" @click="delChar">del</span>
        </li>
        <li class="kb-char-item">
          <span @click="enterChar">4</span>
          <span @click="enterChar">5</span>
          <span @click="enterChar">6</span>
          <span class="kb-char-large" :class="value ? '' : 'kb-char-disabled'" @click="clearChar">clear</span>
        </li>
        <li class="kb-char-item">
          <span @click="enterChar">7</span>
          <span @click="enterChar">8</span>
          <span @click="enterChar">9</span>
          <span class="kb-char-large" :class="isOnlyOneKeyboard ? 'kb-char-disabled' : ''" @click="changeKeyboard">ABC</span>
        </li>
        <li class="kb-char-item">
          <span @click="enterChar">.</span>
          <span @click="enterChar">0</span>
          <span class="blank">&nbsp;</span>
          <span class="kb-char-large" @click="closeKeyboard">{{value ? 'OK' : 'CLOSE'}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import './keyboard.scss'
  import {defaultProps} from '../utils/'
  export default {
    name: 'lin-keyboard',
    props: defaultProps({
      value: '',
      show: false,
      keyType: null, // number, char
      onKeyboardChange () {},
      initKeyboard () {}
    }),
    data () {
      return {
        isShowKeyboard: true,
        charUpperCase: false,
        isCharKeyboard: this._judgeKeyboardType(),
        isOnlyOneKeyboard: this._judgeOnlyOneKeyboard()
      }
    },
    created () {
    },
    beforeUpdate () {
      this.isCharKeyboard = this._judgeKeyboardType()
    },
    updated () {
    },
    watch: {
      value () {
        this._watchProps()
      },
      show () {
        this._watchProps()
      },
      keyType () {
        this._watchProps()
      }
    },
    methods: {
      _watchProps () {
        this.$emit('onKeyboardChange', this.value, this.show, this.keyType)
      },
      /**
       * 判断是否可以切换键盘，true不可切换，false可切换。不设定类型则默认可以切换键盘
       */
      _judgeOnlyOneKeyboard () {
        if (this.keyType === null) {
          return false
        } else {
          return true
        }
      },
      /**
       * 判断键盘类型
       */
      _judgeKeyboardType () {
        if (!this._judgeOnlyOneKeyboard()) {
          this.isOnlyOneKeyboard = false
          return this.isCharKeyboard
        } else {
          this.isOnlyOneKeyboard = true
          if (this.keyType === 'number') {
            return false
          } else {
            return true
          }
        }
      },
      /**
       * 字母键盘大小写变化
       */
      changeChar () {
        this.$data.charUpperCase = !this.$data.charUpperCase
      },
      /**
       * 键盘输入值
       * @param e
       * @param val
       */
      enterChar (e, val) {
        let target = e.originalTarget || e.target
        if (val === '') {
          this.value = this.value + ' '
        } else {
          this.value = this.value + target.innerText
        }
      },
      /**
       * 点击删除键
       */
      delChar () {
        let len = this.value.length
        if (!len) return
        this.value = this.value.substring(0, len - 1)
      },
      /**
       * 清空值
       */
      clearChar () {
        let len = this.value.length
        if (!len) return
        this.value = ''
      },
      /**
       * 字母和数字键盘切换,如果仅仅是数字或字符则不可切换
       */
      changeKeyboard () {
        if (!this._judgeOnlyOneKeyboard()) {
          this.isCharKeyboard = !this.isCharKeyboard
          this.isOnlyOneKeyboard = false
        } else {
          this.isOnlyOneKeyboard = true
        }
      },
      /**
       * 关闭键盘
       */
      closeKeyboard () {
        this.isShowKeyboard = false
        this.show = false
      }
    },
    compiled () {
      console.log('compiledcompiled')
    }
  }
</script>

