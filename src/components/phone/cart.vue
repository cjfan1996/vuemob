<template>
    <div class="container">
     <div v-if="nologin" class="nologin">
         <router-link to="/login" class="jump_login">请先登录</router-link>  
     </div>
     <div v-if="!nologin">
      <div class="top">
         <img src="../../assets/jiantou.png" alt="">
         <span>购物车</span>
       </div>
       <div class="check">
          <input type="checkbox" id="check" @change="selectAll" v-model="chose"><label for="check">全选</label>  
       </div>
       <div class="geli">
       <div class="product" v-for="(item,index) of list" :key="index">
       <div class="p-img">
           <input type="checkbox" v-model="item.cd" @change="change">
            <img :src="`http://127.0.0.1:3000/`+item.img" alt="">
        </div>
        <div class="p-text">
           <span>{{item.title}}</span>
           <span class="price" >￥{{item.price}}</span>
           <div class="count">
               <div>
                   <button @click="reduce" :data-index="`${index}`" :data-amount="`${item.amount}`">-</button>
                   <span>{{item.amount}}</span>
                   <button @click="add" :data-index="`${index}`">+</button>
               </div>
               <a href="javascript:;" @click="delone" :data-id="item.id">删除</a>
           </div>
       </div>
      </div>
       <div class="account">
           <div>
             <span >合计</span>
             <span >￥{{all}}</span>
           </div>
           <button type="danger">去结算</button>
         </div>
        </div>
        </div>
     </div>
</template>

<script>
export default {
  data(){
      return {
       total:null,
       list:[],
       chose:"",
       all:0,
       nologin:true
      }
  },
  created(){
      this.loadmore();
  },
  methods:{
   loadmore(){
       var username=sessionStorage.getItem("userName")
       this.axios.get("cart",{params:{username}}).then(res=>{
        //    this.list=this.list.concat(res.data.data);
           var arr=res.data.data;
           for(var item of arr){
               item.cd=false;
           }
           this.list=arr;
       })
       console.log(2222222222)
       var username=sessionStorage.getItem("userName")
       if(username){
        this.nologin=false
       }
    //   for(var i=0;i<this.list.lenght;i++){
    //       this.total=parseInt(this.list[i].amount*this.list[i].price)
    //       console.log(this.list[i].amount)
    //   }
   },
   reduce(e){
       var index=e.target.dataset.index;
    //    console.log(this.list)
    //    console.log(index)
       if(this.list[index].amount>1){
           this.list[index].amount--;
           this.calc()
       }
   },
   add(e){
       var index=e.target.dataset.index;
       this.list[index].amount++;
       this.calc()
   },
   //单选控制多选
   change(){
       var count=0;
       for(var i=0;i<this.list.length;i++){
           if(this.list[i].cd==true){
               count++;
           }else if(this.list[i].cd==false){
               count--
           }
           if(count==this.list.length){
               this.chose=true
           }else{
               this.chose=false
           }
           this.calc()
       }
   },
   delone(e){
       var id=e.target.dataset.id;
       this.$messagebox({
           title:"是否删除选中商品",
           showCancelButton:true
       }).then(pd=>{
           if(pd=="confirm"){
               this.axios.get("del",{params:{id:id}}).then(res=>{
                   console.log(111111111)
                   this.loadmore();
               })
           }
       })
   },
   selectAll(e){
       var rs=e.target.checked;
    //    console.log(rs)
    //    console.log(this.list)
     for(var item of this.list){
         item.cd=e.target.checked;
        //  console.log(item.cd)
        //  this.loadmore()
     }
   },
   calc(){
       var money=0;
       for(var i=0;i<this.list.length;i++){
           if(this.list[i].cd){
               money+=this.list[i].price*this.list[i].amount
           }
       }
       this.all=money
   }
  }
}
</script>

<style scoped>
.jump_login{
    display:block;
    width:100px;height:50px;
    background-color:#dcdddd;
    color:#333;
    border-radius:10px;
    text-align: center;
    line-height:50px;
    position:absolute;
    top:50%;
    left:65%;  
}
.nologin{
    height:600px;
    background-image:url(../../assets/u=3980892961,3878306228&fm=26&gp=0.jpg);
    background-size:100%;
    background-repeat: no-repeat;
    background-position-y: 50%;
}
.top>img{
    width:10px;height:18px;
    margin-left:10px;
    margin-top:15px;
}
.top>span{
    margin-left:40%;
}
.check{
    margin-top:20px;
    margin-left:5px;
    background-color:#faffa3;
}
.product{
    background:#fff;
    margin-top:10px;
    border:1px solid red;
    display:flex;

}
.product>.p-img{
    display:flex;
}
.product>.p-img>input{
    border:1px solid gray;
    width:25px;
    height:25px;
    border-radius:50%;
    margin:30px 5px;
}
.product>.p-img>img{
    padding:5px;
    width:100px;
    height:100px;
    border:1px solid #999;
}
.p-text{
    margin-left:10px;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center
}
.p-text>.count{
    width:100%;
    display:flex;
    justify-content: space-between;
}
.p-text>.count button{
    width:30px;height:30px
}
.p-text>.count span{
    text-align:center;
    line-height:30px;
    display:inline-block;
    width:50px;
    height:30px;
}
.p-text>.price{
    margin-top:10px;
    color:red;
    font-size:15px;
}
.p-text>.count>a{
    color:#999;
}
.account{
    background:silver;
    width:100%;
    display:flex;
    position:fixed;
    bottom:8.5%;
    justify-content: space-between;
}
.account>button{
    margin-left:50px;
    background:#fd5a5b;
    width:98px;height:50px;
}
.account>div{
    margin-top:17px;
}
.geli{
    margin-bottom:60px;
}
</style>