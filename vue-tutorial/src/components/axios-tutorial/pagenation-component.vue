<template>
    <div>
        <h1> Table List </h1>
        <list-component :list-array = "pageArray"> </list-component>
    </div>
</template>

<script>
import axios from 'axios'
import ListComponent from './list-component'

export default {
    name : "pagenation-component",
    components : {
        ListComponent
    },
    data () {
        return {
            pageArray : []
        }
    },
    created () {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response);
            this.pageArray = response.data;
        })
        .catch(err => {
            console.log(err);
        })
    }
}
</script>
<style scoped>
    h1{
        color : #454545;
        text-align: center;
    }
</style>