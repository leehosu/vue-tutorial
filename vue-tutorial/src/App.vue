<template>
  <div id="app">
    Parent Counter : {{ getCounter }} <br>
    <button @click="addClick"> + </button>
    <button @click="minClick"> - </button>
    <button @click="tenClick"> +10 </button>
    <child></child>
  </div>
</template>

<script>
import child from './components/vuex-tutotial/child'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components : {
    child
  },
  methods : {
    addClick() {
      this.$store.commit('plusCounter')
    },
    minClick() {
      this.$store.commit('minCounter')
    },
    tenClick(){
      this.$store.commit('tenPlus', 10)
    }
  },
  computed : {
    ...mapGetters([
      'getCounter'
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left:50px;
}
</style>
