<template>
    <div>
        <button v-on:click = "showTitle"> Click </button>
        <span> {{ title }} </span>
    </div>    
</template>

<script>
export default {
    name : 'global-component',
    data () {
        return {
            title : "global component test"
        }
    },
    methods : {
        showTitle() {
            this.title = 'Global component!!'
        }
    }
}
</script>

<style scoped>
    div {
        padding : 20px
    }
    div span {
        margin : 20px
    }
</style>