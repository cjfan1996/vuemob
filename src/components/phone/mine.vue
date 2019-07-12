<template>
    <div class="container">
       <div class="top">
           <img src="../../assets/机器人.png" alt="">
          <div class="login" v-show="islogin">
            <p>登录后享受更多优惠及服务</p>  
            <button @click="login" >登录/注册</button>
          </div>  
          <div class="login" v-show="nologin">
              <p>欢迎回来</p>
              <div>
                 <h2>{{name}}</h2> 
                 <a href="javascript:;" @click="quxiao">注销</a>
              </div>
              </div> 
        </div> 
        <div class="order">
            <div class="second">
                <span>我的订单</span>
                <span>全部订单 <img src="../../assets/方向 - 下.png" alt=""></span>
            </div>
            <div class="line"></div>
            <div class="content">
                <div>
                    <img src="../../assets/dsh_new.png" alt="">
                    <span>待审核</span>
                </div>
                <div>
                    <img src="../../assets/dzf_new.png" alt="">
                    <span>待审核</span>
                </div>
                <div>
                    <img src="../../assets/dcx_new.png" alt="">
                    <span>待审核</span>
                </div>
                <div>
                    <img src="../../assets/ddp_new.png" alt="">
                    <span>待审核</span>
                </div>
                <div>
                    <img src="../../assets/tk_new.png" alt="">
                    <span>待审核</span>
                </div>
            </div>
        </div>
        <div class="bottom">
          <p>常用功能</p>
          <div class="icon">
              <div>
                  <img src="../../assets/wdsc.png" alt="">
                  <p>我的关注</p>
              </div>
               <div>
                  <img src="../../assets/hyjlb.png" alt="">
                  <p>会员俱乐部</p>
              </div>
              <div>
                  <img src="../../assets/benefits.png" alt="">
                  <p>领取会员权益</p>
              </div>
              <div>
                  <img src="../../assets/checkIn.png" alt="">
                  <p>签到</p>
              </div>
               <div>
                  <img src="../../assets/cyxx.png" alt="">
                  <p>常用信息</p>
              </div>
               <div>
                  <img src="../../assets/xlbt.png" alt="">
                  <p>小驴白条</p>
              </div>
               <div>
                  <img src="../../assets/下载.png" alt="">
                  <p>我的游记</p>
              </div>
               <div>
                  <img src="../../assets/wdfp.png" alt="">
                  <p>我的发票</p>
              </div>
              <div>
                  <img src="../../assets/mdcx.png" alt="">
                  <p>门店查询</p>
              </div>
              <div>
                  <img src="../../assets/gyshz.png" alt="">
                  <p>供应商合作</p>
              </div>
              <div>
                  <img src="../../assets/aboutLvmm.png" alt="">
                  <p>关于驴妈妈</p>
              </div>
              <div>
                  <img src="../../assets/wenjuan.png" alt="">
                  <p>参与有奖问题</p>
              </div>
               <div>
                  <img src="../../assets/kfzx.png" alt="">
                  <p>在线客服</p>
              </div>
               <div>
                  <img src="../../assets/credit.png" alt="">
                  <p>信用住</p>
              </div>
               <div>
                  <img src="../../assets/baodan.png" alt="">
                  <p>我的保单</p>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
   data(){
       return{
      islogin:true,
      nologin:false,
      name:""
       }
   },
   created(){
       this.loadmore();
   },
   methods:{
       login(){
           this.$router.push("login")
       },
       loadmore(){
        var userName=sessionStorage.getItem("userName")
        if(userName){
            this.islogin=false;
            this.nologin=true;
            this.name=userName
        }
       },
       quxiao(){
           sessionStorage.clear();
           history.go(0)
       }
   }
}
</script>

<style scoped>
.container{
    background-color:#eeeef5;
}
 .top{
     height:214px;
 background-image:url(../../assets/微信图片_20190622150947.png);
 background-size:100%;    
 background-repeat: no-repeat;
 position:relative;
 text-align:center;
 }
 .top>img{
    width:62px;
    height:62px; 
   margin-top:10px;
 }
 .login{
     height:130px;
     position:absolute;
     bottom:0;
     background:rgba(255,255,255,0.7);
     width:80%;
     left:10%;
     text-align:center;
     line-height: 40px;
     border-radius:10px;
 }
 .login>button{
     width:145px;height:34px;
     border-radius:34px;
     background-color:#3181f4;
     color:#fff;
 }
 .login>div{
     display:flex;
     justify-content: space-around;
 }
 .order{
     margin-top:10px;
     background:#fff;
 }
 .second{
     display:flex;
     justify-content: space-around;
 }
 .second img{
     width:15px;height:15px;
 }
 .order>.line{
     background:#f2f2f2;
     height:5px;
     width:80%;
     margin-left:10%;
 }
 .content{
     display:flex;
 }
 .content>div{
    
     width:20%;
     display:flex;
     flex-direction: column;
     align-items: center;
 }
 .content>div>img{
     width:26px;
 }
 .content>div>span{
     font-size:12px;
 }
 .bottom{
     background-color:#fff;
     margin-top:10px;
 }
 .icon>div{
     width:25%;
     display:flex;
     flex-direction: column;
     align-items: center;
 }
 .icon{
     display:flex;
     flex-wrap: wrap;
 }
 .icon>div>img{
    width:22px;height:22px; 
 }
 .icon>div>p{
     font-size:12px;
 }
</style>
