<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="imgPath(item.imgSrc)" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  },
  methods: {
    imgPath(pic) {
      return require(`../../../assets/img/${pic}`)
    }
  }
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
  height: 11.97rem;
}

.swiper-pagination {
  color: red;
}
</style>
