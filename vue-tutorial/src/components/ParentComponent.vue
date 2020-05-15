<template>
    <div>
        {{ myNum}}
        <ChildComponent v-bind:myNum="myNum" ></ChildComponent>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent'

export default {
    name : 'ParentComopnent',
    components : {
        ChildComponent
    },
    data () {
        return {
            myNum : 10
        }
    },
    methods : {
        updateParentNumber(num){
            this.myNum = num
        }
    }
}
</script>