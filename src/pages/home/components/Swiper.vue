<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.src" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiperList } from '@/api/home/home'
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
      },
      swiperList,
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: red !important;
}
.wrapper {
  overflow: hidden;
  width: auto;
  height: auto;
  background: rgb(227, 154, 5);
}
.swiper-img {
  width: 100%;
}

.swiper-pagination {
  color: red;
}
</style>
