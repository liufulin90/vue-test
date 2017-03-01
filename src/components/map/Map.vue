<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>Enter content: {{ inputData }}</div>
    <ul>
      <li v-for="d in inputList">
        {{d}}
      </li>
    </ul>
    <input v-model="inputData">
    <div>
      <button v-on="onClick">Submit</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'map',
    data () {
      let {inputData, inputList} = this.$store.state
      console.log(inputList)
      return {
        msg: 'This page is map page',
        inputData: inputData
      }
    },
    watch: {

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
