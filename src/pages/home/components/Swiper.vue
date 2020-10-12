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
import pic1Src from '@/assets/img/travel-1.jpg'
import pic2Src from '@/assets/img/travel-2.jpg'

export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
      },
      swiperList: [
        {
          id: '0001',
          src: pic1Src,
        },
        {
          id: '0002',
          src: pic2Src,
        },
      ],
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
  background: #fff;
}
.swiper-img {
  width: 100%;
}

.swiper-pagination {
  color: red;
}
</style>
