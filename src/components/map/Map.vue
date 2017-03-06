<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>Enter content: {{ inputData }}</div>
    <ul>

    </ul>
    <input v-model="inputData">
    <div>
      <button @click="onClick">Submit</button>
    </div>
    <transition>
      <div v-if="isOk">toggled content</div>
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
//        this.$data.isOk = !this.$data.isOk
//        this.$store.state.mapPage.isOk = this.isOk
        this.$store.dispatch('changeViewAction')
        console.log('######')
        this.$data.isOk = this.$store.state.mapPage.isOk
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
