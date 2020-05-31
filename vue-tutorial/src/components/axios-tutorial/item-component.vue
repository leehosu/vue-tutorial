<template>
    <div class = "list-item" >
        <div class = "item id"> {{ item.id }} </div>
        <div class = "item contents">
            <div class = "item title"> {{ item.title }}</div>
            <div class = "item body"> {{ item.body }} </div>
        </div>
        <div class = "item userId"> {{ item.userId }}</div>
    </div>
</template>

<script>
export default {
    name : 'item-component',
    props : {
        item : {
            type :Object,
            required : false,
            default : void 0
        }
    }
}
</script>

<style scoped>
    .list-item {
        padding : 1rem 0;
        font-size: 2rem;
        display: flex;
        border-bottom : 1px solid #D8D8D8;
    }

    .item {
        width: 100%;
    }

    .userId{
        flex:1;
    }

    .id {
        flex :1;
    }

    .contents {
        flex :7;
    }

    .title {
        font-weight: bold;
    }

    .body {
        font-size : 1.5rem;
    }

</style>