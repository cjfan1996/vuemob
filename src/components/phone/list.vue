<template>
    <div class="container">
     <div class="nav">
        <img src="../../assets/jiantou.png" alt="" @click="history">
        <input type="text" placeholder="请输入你要搜索的内容">
        <img class="img2" src="../../assets/主页.png" alt="" @click="home">
        <img class="img3" src="../../assets/用户.png" alt="" @click="login">
     </div>
     <list></list>
    </div>
</template>

<script>
import list from './product_list'
export default {
   data(){
       return{}
   },
   methods:{
       home(){
           this.$router.push("home")
       },
       login(){
           this.$router.push("login")
       },
       history(){
           history.go(-1)
       }
   },
   components:{
       list,
   }
}
</script>

<style scoped>
.nav>img:first-child{
    width:10px;height:18px;
    margin-left:10px;
}
.nav>input{
    width:165px;height:30px;
    border-radius:20px;
    font-size:13px;
    margin-left:50px;
}
.img2,.img3{
    width:21px;height:22px;
    margin-left:30px;
    vertical-align: middle;
}
</style>
