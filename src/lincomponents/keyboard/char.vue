<template>
  <div class="kb-char-wrap">
    <ul>
      <li class="kb-char-item">
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'Q' : 'q'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'W' : 'w'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'E' : 'e'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'R' : 'r'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'T' : 't'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'Y' : 'y'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'U' : 'u'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'I' : 'i'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'O' : 'o'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'P' : 'p'}}</span>
      </li>
      <li class="kb-char-item">
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'A' : 'a'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'S' : 's'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'D' : 'd'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'F' : 'f'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'G' : 'g'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'H' : 'h'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'J' : 'j'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'K' : 'k'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'L' : 'l'}}</span>
      </li>
      <li class="kb-char-item">
        <b :class="charUpperCase ? 'kb-char-middle kb-char-active ' : 'kb-char-middle'" @click="changeChar">^</b>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'Z' : 'z'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'X' : 'x'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'C' : 'c'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'V' : 'v'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'B' : 'b'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'N' : 'n'}}</span>
        <span class="kb-chars" @click="enterChar">{{charUpperCase ? 'M' : 'm'}}</span>
        <span class="kb-char-middle" @click="delChar">del</span>
      </li>
      <li class="kb-char-item">
        <span class="kb-char-large">.?123</span>
        <span class="kb-char-large" @click="clearChar">clear</span>
        <span class="kb-char-space" @click="enterChar($event, '')">space</span>
        <span class="kb-char-large">GO</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {defaultProps} from '../utils/'
  export default {
    name: 'lin-keyboard-char',
    props: defaultProps({
      value: '',
      onKeyboardChange () {}
    }),
    data () {
      return {
        charUpperCase: false
      }
    },
    created () {

    },
    updated () {
    },
    watch: {
      value (val) {
        this.$emit('onKeyboardChange', val)
      }
    },
    methods: {
      changeChar () {
        this.$data.charUpperCase = !this.$data.charUpperCase
      },
      enterChar (e, val) {
        if (val === '') {
          this.value = this.value + ' '
        } else {
          this.value = this.value + e.originalTarget.innerText
        }
      },
      delChar () {
        let len = this.value.length
        if (!len) return
        this.value = this.value.substring(0, len - 1)
      },
      clearChar () {
        let len = this.value.length
        if (!len) return
        this.value = ''
      }
    },
    compiled () {
      console.log('compiledcompiled')
    }
  }
</script>

<style>
  .kb-char-wrap{
    background-color: #cccccc;
  }
  .kb-char-wrap ul,.kb-char-wrap ul li{
    list-style: none;
    font-size: 14px;
  }
  .kb-char-item span,
  .kb-char-item b{
    min-width: 1em;
    height: 2.5em;
    padding: 0 .5em;
    display: inline-block;
    line-height: 2.5em;
    text-align: center;
    background-color: #ffffff;
    margin: 5px;
    border-radius: 0.3em;
  }
  .kb-char-item span:active,
  .kb-char-item b.kb-char-active{
    background-color: #5e7382;
    color: #ffffff;
  }
  .kb-char-space{
    width: 10em;
  }
  .kb-char-large{
    width: 4em;
  }
  .kb-char-middle{
    width: 2.5em;
  }
</style>
