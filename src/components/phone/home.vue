<template>
    <div class="container">
        <mt-tab-container v-model="active" class="page-tabbar-container">
            <mt-tab-container-item id="首页">
                <index></index>
               <product></product>
               <products></products>
               <news></news>
            </mt-tab-container-item>
            <mt-tab-container-item id="留言"></mt-tab-container-item>
             <mt-tab-container-item id="购物车">
                 <cart></cart>
             </mt-tab-container-item>
            <mt-tab-container-item id="会员">
                <vip></vip>
            </mt-tab-container-item>
           
        </mt-tab-container>
        <mt-tabbar v-model="active" fixed>
            <mt-tab-item id="首页">
                <img slot="icon" src="../../assets/8124227_1539847584.png" alt="" class="img"> 
                首页</mt-tab-item>
            <mt-tab-item id="留言">
              <img slot="icon" src="../../assets/8124157_1539847497.png" alt="" class="img">  
              留言</mt-tab-item>
               <mt-tab-item id="购物车">
                    <img slot="icon" src="../../assets/购物车-23.png" alt="">购物车
                </mt-tab-item>
            <mt-tab-item id="会员">
              <img slot="icon" src="../../assets/8124174_1539847517.png" alt="" class="img">
                会员</mt-tab-item>
               
        </mt-tabbar>
        
    </div>
</template>

<script>
import cart from './cart'
import index from './index'
import vip from './mine'
import product from './product'
import products from './product2'
import news from './news'
export default {
  data(){
      return {
          active:"首页"
      }
  },
  components:{
      vip,
      product,
      products,
      index,
     news,
     cart,
  }
}
</script>

<style scoped>
.img{
    width:20px;height:21px;
}
</style>
