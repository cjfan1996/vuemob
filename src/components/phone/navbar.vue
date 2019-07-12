<template>
    <div class="container">
       <mt-navbar v-model="selected">
           <mt-tab-item id="1">
               产品
           </mt-tab-item>
           <mt-tab-item id="2">
               详情
           </mt-tab-item>
       </mt-navbar>
       <mt-tab-container v-model="selected" swipeable>
           <mt-tab-container-item id="1">
               <xiangqing></xiangqing>
           </mt-tab-container-item>
           <mt-tab-container-item id="2">
               <img src="../../assets/u=3478128054,4147359171&fm=15&gp=0.jpg" alt="">
               <img src="../../assets/u=2910186701,2348647785&fm=15&gp=0.jpg" alt="">
               <img src="../../assets/u=891151228,2594104592&fm=26&gp=0.jpg" alt="">
               <img src="../../assets/u=820675172,3502087176&fm=15&gp=0.jpg" alt="">
           </mt-tab-container-item>
       </mt-tab-container>
    </div>
</template>

<script>
import xiangqing from './details'
export default {
  data(){
      return{
          selected:"1"
      }
  },
  components:{
      xiangqing,
  }
  
}
</script>

<style scoped>
 img{
     width:100%;
 }
</style>
