<template>
  <div class="header">
    Choose City
    <router-link to="/">
      <div class="header-left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconarrow-down"></use>
        </svg>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/varibles';
.header {
  overflow: hidden;
  position: relative;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  background: $bgColor;
  color: #fff;
  &-left {
    color: fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
  }
  .icon {
    color: #fff;
  }
}
</style>
