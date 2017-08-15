<template>
  <div class="container">
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
    <!--tab栏目  -->
      <div>
       <tab :line-width=2 active-color='#fe6246' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" :disabled="index === 3" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}}Container </div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: ''
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: ''
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: ''
}]
const imgList = [
  // 'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  // 'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  // 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]
const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  title: `${item.title}`
}))
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
const list = () => ['商小赢说', '金融大咖秀', '商赢佳人', '漫金融']
export default {
  components: {
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem
  },
  ready () {
  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    demo06_onLoad (id) {
      this.demo06_list = id === 1 ? baseList : demoList
    },
    demo06_onIndexChange (index) {
      this.demo06_index = index
    }
  },
  data () {
    return {
      demo06_list: urlList,
      demo06_index: 0,
      swiperItemIndex: 1,
      list2: list(),
      // demo2: '金融大咖秀',
      demoDisabled: 'A',
      index: 0,
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
      }
    }
  }
}
</script>
<style scoped>
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.swiper-demo-img img {
  width: 100%;
}
.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
</style>