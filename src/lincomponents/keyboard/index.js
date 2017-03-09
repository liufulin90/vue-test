import linKeyboard from './keyboard.vue'

/*
 <el-input v-model="keyboardEnterValue" @focus="inputFocus"></el-input>
 <div class="el-input__inner" @click="inputFocus" type="number">{{keyboardEnterValue}}</div>

 <lin-keyboard :value="keyboardEnterValue" :show="showKeyboard" :type="keyboardType" @onKeyboardChange='onKeyboardChange'></lin-keyboard>

 data () {
  return {
     keyboardEnterValue: '',
     showKeyboard: false,
     keyboardType: 'char'
  }
 }

 onKeyboardChange (val, isShow, type) {
   this.keyboardEnterValue = val
   this.showKeyboard = isShow
   this.keyboardType = type
 },
 inputFocus (e) {
   this.showKeyboard = true
   if (e.originalTarget.attributes.type && e.originalTarget.attributes.type.nodeValue === 'number') {
   this.keyboardType = 'number'
   } else {
   this.keyboardType = 'char'
   }
   this.$forceUpdate()
 },
 */

export {
  linKeyboard
}
