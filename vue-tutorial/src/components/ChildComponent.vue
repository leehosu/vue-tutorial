<template>
    <div>
        <input type="number" v-model="propMyNum" />
        <button @click="updateNumber"> 전송 </button>        
    </div>
</template>

<script>
export default {
    props :['myNum'],
    data() {
       return {
           propMyNum : this.myNum
       }
    },
    methods : {
       updateNumber() {
           this.$emit('updateParentNumber', this.propMyNum)
       }
   }
}
</script>