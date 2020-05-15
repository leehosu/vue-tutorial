<template>
    <div class = "list">
        <div class = "list-title">
            <div class = "title no"> NO </div>
            <div class = "title contents"> CONTENTS </div>
            <div class = "title id"> ID </div>
        </div>
        
        <item-component v-for="item in paginatedData" :item = "item" :key="item.no"> </item-component>
        
        <div class = "btn">
            <button class = "page-btn" v-bind:disabled="pageNum ===0" v-on:click="prevPage"> 이전 </button>
            <span class = "page-count"> {{ pageNum +1}} / {{ pageCount}} </span>            
            <button class = "page-btn" v-bind:disabled="pageNum >= pageCount -1" v-on:click="nextPage" > 이후 </button>
        </div>
    </div>
</template>
<script>
import ItemComponent from './item-component';

export default {
    name : 'list-component',
    components : {
        ItemComponent
    },
    data () {
        return {
            pageNum : 0,
            pageSize : 5,
        }
    },
    props : {
        listArray : {
            type : Array,
            required : true
        }
    },
    computed: {
        pageCount() {
            let listLeng = this.listArray.length;
            let listSize = this.pageSize;
            let page = Math.floor(listLeng / listSize);

            if(listLeng % listSize > 0 ) page += 1;

            return page;
        },
        paginatedData () {
            const start = this.pageNum * this.pageSize;
            const end = start + this.pageSize;

            return this.listArray.slice(start,end);
        }
    },
    methods: {
        nextPage () {
            this.pageNum += 1;
        },
        prevPage () {
            this.pageNum -= 1;
        }
    }
}
</script>


<style scoped>
    .list {
        width: 100%;
        border-collapse: collapse;
    }

    .list-title {
        font-size: 2rem;
        display : flex;
        border-bottom : 2px solid #454545;
    }

    .title {
        border-top : 2px solid #404040;
        width: 100%;
    }

    .id {
        flex :1;
    }

    .no {
        flex : 1
    }

    .contents{
        flex : 7
    }

    .btn-cover {
      margin-top: 1.5rem;
      text-align: center;
    }
    .btn-cover .page-btn {
      width: 5rem;
      height: 2rem;
      letter-spacing: 0.5px;
    }
    .btn-cover .page-count {
      padding: 0 1rem;
    }

</style>