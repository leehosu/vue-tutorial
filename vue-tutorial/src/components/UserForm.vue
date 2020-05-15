<template>
    <div>
        <h3> 회원 정보 수정 </h3>
        <p> 수정 내용 </p>
        <span> 이름 </span> <input v-model = "user.name" />
        <span> 주소 </span> <input v-model = "user.address" />
        <span> 번호 </span> <input v-model = "user.phone" /> 
        <input type="radio" id="one" name = "user.hasMarry" v-model ="user.hasMarry" value="유"> <label for="one"> 반려견 유 </label>
        <input type="radio" id="two" name = "user.hasMarry" v-model ="user.hasMarry" value="무"> <label for="two"> 반려견 무 </label>
        <button @click="update"> 잔성 </button>
    </div>
</template>
<script>
export default {
    props:['name', 'address','phone', 'hasMarry'],
    data () {
        return {
            user: {}
        }
    },
    created() {
        this.user.name = this.name,
        this.user.address = this.address,
        this.user.phone = this.phone,
        this.user.hasMarry = this.hasMarry
    },
    methods : {
        update() {
            this.$emit("parents", this.user)
            console.log(this.user)
        }
    }
}
</script>