<template>

<div>
    <input v-model = "name" disabled>
    <input v-model="address" disabled>
    <input v-model="phone" disabled>
    <input v-model="hasMarry" disabled>

    <UserForm :name = "name"
    :address = "address"
    :phone = "phone"
    :hasMarry = "hasMarry"
    @parents = "parents" > </UserForm>
</div>
</template>
<script>
import UserForm from './UserForm'
export default {
    components : {
        UserForm
    },
  data () {
    return {
      name : '',
      address : '',
      phone : '',
      hasMarry : '무'
    }
  },
    methods : {
        parents(user){
            this.name = user.name
            this.address = user.address
            this.phone = user.phone
            this.hasMarry = user.hasMarry

            console.log(this.name)
        }
    }
}
</script>