<template>
    <div class="container">
       <h1>新闻动态</h1>
       <div class="news" v-for="(item,index) of list" :key="index">
           <p>{{item.title}}</p>
           <p>{{item.time}}</p>
       </div>
    </div>
</template>

<script>
export default {
   data(){
       return{
          list:[]
       }
   },
   created(){
       this.loadmore();
   },
   methods:{
       loadmore(){
           this.axios.get('news').then(res=>{
           this.list=this.list.concat(res.data.data)
           })
       }
   }
}
</script>

<style scoped>
.container{
    color:#fff;
    background-color:#232323;
}
h1{
    margin-top:0px;
    font-size:20px;
    text-align:center;
}
.news{
    color:#fff;
    margin-top:20px;
    display:flex;
    justify-content: space-around;
}

</style>
