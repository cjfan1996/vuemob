<template>
    <div class="container">
        
        <div class="product" v-for="(item,index) of lists" :key="index" >
            <img :src="`http://127.0.0.1:3000/`+item.img" alt="">
            <p>{{item.title}}</p>
            <p class="price">
             <span>￥{{item.price}}</span>
             <!-- <a href="javascript:;" @click="list" :data-id="`${item.id}`">查看详情</a> -->
             <!-- 把id从列表页穿去详情页 -->
             <router-link :to="{path:'/navbar',query:{id:`${item.id}`}}" class="round">查看详情</router-link>
            </p>
            <mt-button type="danger" class="btn">加入购物车</mt-button>
        </div>
        <mt-button type="primary" size="large" @click="loadmore">加载更多</mt-button>
    </div>
</template>

<script>

export default {
   data(){
       return{
          lists:[],
          pno:0,
          pageSize:4
       }
   },
   created(){
       this.loadmore()
   },
   methods:{
       loadmore(){
           this.pno+=1;
           var pno=this.pno;
           var page=this.pageSize;
       this.axios.get('list',{params:{pno,page}}).then(res=>{
           var rows=this.lists.concat(res.data.data);
           this.lists=rows;
       })
       },
    //  list(e){
    //      var rs=e.target.dataset.id;
    //      this.$router.push("navbar/"+rs);
        
    //     console.log(rs);
    //  },
   
    
   }
}
</script>

<style scoped>
  .container{
      display:flex;
      flex-wrap: wrap;
  }
  .product{
      border:1px solid gray;
      width:50%;height:232px;
      display:flex;
      flex-direction: column;
      /* padding:5px; */

  }
  img{
      width:170px;height:135px;
  }
  .price{
      color:red;
      display:flex;
      justify-content: space-around;
  }
  .round{
      color:#999;
      font-size:12px;
  }
  .btn{
      display:flex;
      justify-content: right;
      background-color:red;
  }
</style>
