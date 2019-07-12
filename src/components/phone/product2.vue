<template>
    <div class="container">
        <h1>解决方案</h1>
        <div class="item" v-for="(item,index) of solution" :key="index">
            <img :src="`http://127.0.0.1:3000/`+item.img" alt="">
            <div class="text">
                <h3>{{item.title}}</h3>
                <span>{{item.subtitle}}</span>
            </div>
        </div>
        <div class="bdiv">
            <mt-button type="primary" class="btn">查看更多</mt-button>
        </div>
        
    </div>
</template>

<script>
export default {
  data(){
      return{
          solution:[]
      }
  },
  created(){
      this.loadmore();
  },
  methods:{
      loadmore(){
       this.axios.get("solution").then(res=>{
           var rows=this.solution.concat(res.data.data);
           this.solution=rows;
       })
      }
  }
}
</script>

<style scoped>
 h1{
      margin:0;
     text-align:center;
     color:#fff;
     background-color:#222222;
     font-size:29px;
     padding-bottom:20px;
     padding-top:20px;
 }
 .item{
     
     color:#fff;
     background-color:#323232;
     display:flex;
 }
 .item>img{
     width:165px;height:120px;
     padding:8px;
 }
 .text{
     margin-top:20px;
     display:flex;
     flex-direction: column;
 }
 h3{
     font-size:15px;
 }
 .text>span{
     font-size:13px;
     margin-top:20px;
 }
 .btn{
     width:113px;height:32px;
     border-radius:15px;
     display:block;
     margin:0 auto;
 }
 .bdiv{
     background-color:#222222;
     height:82px;
     line-height:82px;
 }
</style>
