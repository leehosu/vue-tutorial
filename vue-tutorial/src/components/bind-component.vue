<template>
    <div>
        <input v-bind:value="text" v-on:input="updateText">
    </div>
</template>

<script>
export default {
    name : 'bind-component',
    data () {
        return {
            text : ''
        }
    },
    methods :{
        updateText(event) {
            var updateText = event.target.value
            this.text = updateText
            console.log(this.text)
        }
    }
}

</script>