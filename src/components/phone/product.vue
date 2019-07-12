<template>
    <div class="container">
        <h1>我们的产品</h1>
        <div class="photo_product">
        <div class='product' v-for="(item,index) of list" :key="index">
            <img :src="`http://127.0.0.1:3000/`+item.img" alt="">
            <h4>{{item.title}}</h4>
        </div>
        </div>
       <mt-button type="primary" class="btn" @click="go">查看更多</mt-button>
    </div>
</template>

<script>
export default {
  data(){
      return{
          list:[],
          
      }
  },
  created(){
      this.loadmore()
  },
  methods:{
      loadmore(){
          this.axios.get('product').then(res=>{
             var  rows=this.list.concat(res.data.data);
              this.list=rows;  
          })
      },
      go(){
          this.$router.push("list")
      }
  }
}
</script>

<style scoped>
.container{
    background-color:#272727;
}
h1{
     margin:0;
    padding:20px;
    font-size:29px;
    text-align:center;
    color:#fff;
}
.photo_product{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.product{
    width:47%;
    min-height:150px;
    border:1px solid #272727;
    margin:0 5px;
    padding:5px;
}
.product img{
    width:153.6px;height:121.14px;
}
h4{
    margin-top:10px;
    color:#fff;
    font-size:15px;
}
.btn{
    display:block;
    width:113px;
    height:32px;
    border-radius:15px;
    margin-top:15px;
    margin-bottom:25px;
    margin:0 auto;
}
</style>
