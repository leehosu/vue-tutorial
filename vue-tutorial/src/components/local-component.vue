<template>
    <div>
        <button v-on:click = "showTitle"> Click </button>
        <span> {{ title }} </span>
    </div>    
</template>

<script>
export default {
    name : "local-component",
    data () {
        return {
            title : "local component"
        }
    },
    methods: {
        showTitle () {
            this.title = 'Local Component!'
        }
    }
}
</script>

<style scoped>
  div {
    padding: 20px
  }

  div span {
    margin: 20px
  }
</style>