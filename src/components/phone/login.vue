<template>
    <div class="container">
        <div class="nav">
            <img src="../../assets/jiantou.png" alt="" @click="history">
            <span>会员登录</span>
        </div>
        <hr>
        <div class="user_img">
            <img src="../../assets/yonghu.png" alt="">
            <p>会员登录</p>
        </div>
        <mt-field label="用户名" placeholder="请输入用户名" class="input" v-model="uname"></mt-field>
        <mt-field label="密码" type="password" placeholder="请输入密码" class="input" v-model="upass"></mt-field>
        <div class="text">
           <a href="javascript:;" @click="reg">注册用户</a>
             <a href="javascript:;">忘记密码</a>
        </div>
        <mt-button size="large" type="primary" @click="login">登陆</mt-button>
    </div>
</template>

<script>
export default {
   data(){
       return {
        uname:"",
        upass:"",
       }
   },
   methods:{
       login(){
           if(this.uname==""){
               this.$messagebox("",'用户名不能为空')
               return;
           }
           if(this.upass==""){
               this.$messagebox('','密码不能为空')
               return;
           }
           var uname=this.uname;
           var upass=this.upass;
           this.axios.get('denglu',{params:{uname,upass}}).then(res=>{
               console.log(res.data.code)
               if(res.data.code==1){
                   this.$toast("欢迎回来")
                   this.$router.push('/home')
                   sessionStorage.setItem("userName",this.uname)
                   console.log(this.uname)
               }else{
                   this.$messagebox("提示",res.data.msg)
               }
           })
       },
       reg(){
           this.$router.push("/reg");
       },
       history(){
           history.go(-1)
       }
   }
}
</script>

<style scoped>
/* 最上面导航栏 */
.nav{ 
    display: flex;
    justify-content: space-between;
    margin-top:10px;
}
.nav>img{
    width:10px;height:18px;
}
/* 中间用户图片 */
.user_img{
    margin-top:10px;
    text-align:center;
}
.user_img>img{
    width:60px;height:60px;
}
.user_img>p{
    margin:0;
}
/* 登录框 */
.input{
    margin-top:20px;
}
/* 忘记密码与注册方面 */
.text{
    margin-top:20px;
    margin-bottom:20px;
    display:flex;
    justify-content: space-between;
    padding:0 10px;
}
.text>a{
    text-decoration: none;
    color:gray;
}
</style>
