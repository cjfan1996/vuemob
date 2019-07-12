<template>
    <div class="container">
     <mt-swipe :auto=3000 style="width:100%;height:276px;" class="banner">
        <mt-swipe-item><img src="../../assets/7946537_1538990219.jpg" alt="" style="width:100%;height:276px;"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/7946537_1538990219.jpg" alt="" style="width:100%;height:276px;"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/7946537_1538990219.jpg" alt="" style="width:100%;height:276px;"></mt-swipe-item>
     </mt-swipe>
     <div class="introduce" v-for="(item,index) of list" :key="index">
         <p>{{item.title}}</p>
         <h1>{{item.price*item.amcount}}</h1>
          <p>{{item.number}}</p> 
          <div class="count">
              <div>
                  <button @click="reduce" :data-index="`${index}`">-</button>
                  <span>{{item.amcount}}</span>
                  <button @click="add" :data-index="`${index}`">+</button>
              </div>
            <mt-button type="danger"  @click="addCart" :data-title="item.title" :data-price="item.price" :data-img="item.img" :data-amcount="item.amcount">加入购物车</mt-button>
          </div>
         
     </div>
     <p class="direction">
          <span>产品说明</span> 
          <img src="../../assets/方向 - 下.png" alt=""> 
     </p>
    <p>相关推荐</p>
    <div class="small_img">
        <div v-for="(item,index) of 5" :key="index">
            <img src="../../assets/small/7946219_1538989691.jpg" alt="">
            <p>字符喷印机 PY300D</p>
        </div>
    </div>
    <div class="bottom">
        <div>
            <img src="../../assets/客服.png" alt="">
            <p>客服</p>
        </div>
         <div>
            <img src="../../assets/星星-线.png" alt="">
            <p>收藏</p>
        </div>
    </div>
    </div>
    
</template>

<script>
export default {
     data(){
         return {
            id:"",
            list:[]
         }
     },
     created(){
         //获取从列表页传过来的id
         var newid=this.$route.query.id;
         console.log(newid);
         this.id=newid
         this.loadmore()
     },
     methods:{
         loadmore(){
             this.axios.get('details',{params:{id:this.id}}).then(res=>{
              this.list=this.list.concat(res.data.data)
             console.log(res.data.data)
             })
             
         },
         add(e){
             var index=e.target.dataset.index;
             this.list[index].amcount++;
         },
         reduce(e){
             var index=e.target.dataset.index;
             if(this.list[index].amcount>0){
                 this.list[index].amcount--;
             }
         },
         addCart(e){
             var username=sessionStorage.getItem("userName")
           var title=e.target.dataset.title;
           var amcount=e.target.dataset.amcount;
           var img=e.target.dataset.img;
           var price=e.target.dataset.price;
          console.log(amcount,img,price,title)
          if(!username){
              this.$toast("请先登录")
              this.$router.push('/login')
          }else{
               this.axios.get("insert",{params:{username,img,amount:amcount,title,price}}).then(res=>{
            if(res.data.code==1){
               console.log(res)
               this.$router.push("/home")
            }
        })
          }

         }
     }
}
</script>

<style scoped>

.introduce>p{
    margin-left:10px;
    color:#232326;
}
h1{
    font:22px Helvetica;
    color:#ff3e3e;
    margin-left:20px;
}
.direction{
    border-top:1px solid gray;
    display:flex;
    justify-content: space-between;
    line-height:40px;
    margin-left:10px;
}
.direction>img{
    width:40px;height:40px;
}
.small_img{
    margin-top:10px;
    display:flex;
    flex-wrap: wrap;
}
.small_img>div{
    padding:5px;
    width:33%;height:191px;
}
.small_img>div>img{
    margin-top:10px;
    width:104px;height:83px;
    margin-bottom:20px;
}
.small_img>div>p{
    margin-left:10px;
}
.bottom{
    background:#f2e6e6;
    position:fixed;
    width:100%;
    bottom:0;
    display:flex;
    justify-content: space-around;
}
.bottom>div>img{
    width:40px;height:42px;
    margin-left:4px;
}
.bottom>div{
    display:flex;
    flex-direction: column;
}

.bottom>div>p{
    margin:0 auto;
}
.introduce>div{
    text-align:right;
}
.count{
    display:flex;
    justify-content: space-between;
}
.count>div>button{
width:30px;height:30px;
}
.count span{
     text-align:center;
    /* line-height:30px; */
    display:inline-block;
    width:50px;
    height:30px;
}
</style>
