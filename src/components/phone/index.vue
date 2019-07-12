<template>
    <div class="index">
        <div class="nav">
         <img src="../../assets/1539845788983566.jpg" alt="">
         <div>
             <img src="../../assets/导航栏.png" alt="">
         </div>
         <!-- 轮播图 -->
        
        </div>
         <mt-swipe style="width:100%;height:174px;" :auto=3000 class="banner">
             <mt-swipe-item >
                 <img src="../../assets/tmp1539845842_1775882_s.jpg" alt="" style="width:100%;height:174px;">
             </mt-swipe-item>
              <mt-swipe-item >
                 <img src="../../assets/tmp1539845827_1775882_s.jpg" alt="" style="width:100%;height:174px;">
             </mt-swipe-item>
         </mt-swipe>
        <!-- 中间搜索框 -->
        <div class="lie">
            <img src="../../assets/搜索.png" alt="">
            请输入搜索内容
        </div>
        <!-- 四张图片导航栏 -->
        <div class="img_nav">
            <div>
               <a href="javascript:;"><img src="../../assets/8123059_1539846026.png" alt=""></a>
               <a href="javascript:;">产品中心</a>   
            </div>
            <div>
                 <a href="javascript:;"><img src="../../assets/8123036_1539845989.png" alt=""></a> 
                 <a href="javascript:;">解决方案</a> 
            </div>
          <div>
               <a href="javascript:;"><img src="../../assets/8123010_1539845969.png" alt=""></a> 
               <a href="javascript:;">关于我们</a> 
          </div>
          <div>
              <a href="javascript:;"><img src="../../assets/8122998_1539845957.png" alt=""></a>
              <a href="javascript:;">新闻动态</a>  
          </div>
           
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
*{
    margin:0;
    padding:0
}
.index{
    position: relative;
}
 .nav>img{
     width:100%;
 }
 .nav>div{
     border-radius:50%;
     background-color:#ddd;
    z-index:999;
     position:fixed;
     right:10px;
     top:10px;
 }
 .nav>div>img{
 width:32px;height:32px;
 }
 .lie{
     height:20px;
     line-height: 20px;
     text-align:center;
     border:1px solid #ddd;
 }
 .lie>img{
     width:16px;
     height:16px;
 }
 .img_nav{
     margin-top:10px;
     background-color:#272727;
     display:flex;
     justify-content: space-around;
 }
 .img_nav img{
     width:60px;height:60px;
 }
 .img_nav div{
     display:flex;
     flex-direction: column;
 }
 .img_nav a{
     color:#fff;
 }
 div>a:first-child{
     margin-top:20px;
     margin-bottom:10px;
 }
 /* .banner{
     position:absolute;
     top:250px;
 } */
</style>
