<template>
  <div>
    <div class="banner" v-for="item of list" :key="item.id">
      <img class="banner-img" :src="imgPath(item.imgSrc)" />
      <div class="banner-info">
        <div class="banner-info__title">
          德國博物館
        </div>
        <div class="banner-info__number">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconpic"></use>
          </svg>
          39
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  props: {
    list: Array
  },
  mounted() {
    console.log(this.list)
  },
  methods: {
    imgPath(pic) {
      return require(`../../../assets/img/${pic}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.banner {
  position: relative;
  overflow: hidden;
  &-img {
    height: 12.51rem;
    width: 100%;
  }
  &-info {
    display: flex;
    color: rgb(223, 215, 215);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 2.1rem;
    padding-left: 0.31rem;
    &__title {
      flex: 1;
      margin-left: 1.3rem;
    }
    &__number {
      width: 4.9rem;
      background: rgb(43, 42, 42);
      border-radius: 0.32rem;
      height: 1.3rem;
      line-height: 1.17rem;
      .icon {
        padding-left: 0.47rem;
        color: rgb(223, 215, 215);
      }
    }
  }
}
</style>
