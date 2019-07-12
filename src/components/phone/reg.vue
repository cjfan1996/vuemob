<template>
    <div class="container">
        <div class="nav">
            <img src="../../assets/jiantou.png" alt="" @click="back">
            <span>会员注册</span>
        </div>
        <hr>
        <p class="text">用户名<span>*</span></p>
        <mt-field placeholder="用户名请用英文字母下划线或数字" @blur.native.capture="tip" v-model="uname"></mt-field>
        
        <p class="text">密码<span>*</span></p>
        <mt-field placeholder="不少于6个字符,建议用英文加数字或符号" type="password" v-model="upass" @blur.native.capture="tips"></mt-field>
       
        <p class="text">邮箱<span>*</span></p>
        <mt-field type="email" v-model="email" @blur.native.capture="emails" placeholder="请输入有效的邮箱"></mt-field>
        
        <mt-button size="large" type="primary" @click="reg">注册</mt-button>
        <mt-button size="large" @click="back">登录</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            uname:"",
            upass:"",
            email:"",
        }
    },
    methods:{
        tip(){
            this.axios.get("check",{params:{uname:this.uname}}).then(res=>{
                if(res.data.code==-1){
                    this.$toast("用户已被注册  请换名字")
                }else{
                    this.$toast("该用户名未被注册 可使用")
                }
            })
            var regn=/^\d{6,9}$/;
            if(this.uname==""){
              this.$toast('用户名不能为空')
            }else if(!regn.test(this.uname)){
                this.$toast("用户名格式不正确")
            }
        },
        tips(){
            
            if(this.upass==""){
                 this.$toast('密码不能为空')
            }
            var regp=/^\w{6,9}$/;
            if(!regp.test(this.upass)){
                this.$toast("密码格式不正确")
                return;
            }
        },
        emails(){
             
            if(this.email==""){
                  this.$toast('邮箱不能为空')
            }
            var  rege=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if(!rege.test(this.email)){
                this.$toast("邮箱格式不正确")
            }
            return;
        },
        back(){
            this.$router.push('/login')
        },
        reg(){
            var uname=this.uname;
            var upass=this.upass;
            var email=this.email
            var regn=/^\w{6,9}$/;
           var regp=/^\w{6,9}$/;
            var  rege=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
           if(!regn.test(uname)){
               this.$toast("用户名格式不正确")
               return
           }
           if(!regp.test(upass)){
               this.$toast("密码格式不正确")
               return
           }
             if(!rege.test(this.email)){
                this.$toast("邮箱格式不正确")
                return;
            }
            
           this.axios.get('reg',{params:{uname,upass,email}}).then(res=>{
               if(res.data.code==1){
                   this.$router.push('login')
               }else{
                   this.$messagebox("注册失败")
               }
           })

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
/* 文字样式 */
.text{
    background-color:#f5f5f5;
    height:40px;
    margin:0;
    line-height: 40px;
    text-align:left;
    padding:0 5px;
}
.text>span{
    color:red;
}


</style>
